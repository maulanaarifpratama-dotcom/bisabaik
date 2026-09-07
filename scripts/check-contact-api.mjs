/**
 * Exercises api/send-contact.ts without deploying and without touching the
 * real Google Apps Script endpoint.
 *
 * The handler is transpiled in memory with esbuild, global fetch is stubbed,
 * and every branch is asserted. Run it before pushing:
 *
 *   node scripts/check-contact-api.mjs
 */

import { build } from "esbuild";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entry = path.join(root, "api", "send-contact.ts");

async function loadHandler() {
  const result = await build({
    entryPoints: [entry],
    bundle: false,
    write: false,
    format: "esm",
    platform: "node",
    target: "node18",
  });
  const code = result.outputFiles[0].text;
  const mod = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString("base64")}`
  );
  return mod.default;
}

/** Minimal stand-ins for the Vercel req/res pair. */
function mockReq({ method = "POST", body, headers = {} } = {}) {
  return { method, body, headers };
}

function mockRes() {
  const res = {
    statusCode: null,
    payload: null,
    headers: {},
    setHeader(k, v) {
      this.headers[k.toLowerCase()] = v;
      return this;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
  };
  return res;
}

const VALID = {
  name: "Rina Kusumawardani",
  email: "rina@baznas.go.id",
  org: "BAZNAS",
  role: "Programs Director",
  interest: "exit-strategy",
  message: "We are planning a 2027 exit for a village enterprise program.",
};

let upstreamCalls = [];
let upstreamImpl = async () => new Response(JSON.stringify({ ok: true }), { status: 200 });

globalThis.fetch = async (url, init) => {
  upstreamCalls.push({ url, init });
  return upstreamImpl(url, init);
};

const cases = [];
const define = (name, fn) => cases.push({ name, fn });

define("GET is rejected with 405 and an Allow header", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ method: "GET" }), res);
  assert(res.statusCode === 405, `expected 405, got ${res.statusCode}`);
  assert(res.headers.allow === "POST", "expected an Allow: POST header");
});

define("a missing GSCRIPT_URL fails loudly, not silently", async (handler) => {
  const saved = process.env.GSCRIPT_URL;
  delete process.env.GSCRIPT_URL;
  const res = mockRes();
  await handler(mockReq({ body: VALID }), res);
  process.env.GSCRIPT_URL = saved;
  assert(res.statusCode === 500, `expected 500, got ${res.statusCode}`);
  assert(upstreamCalls.length === 0, "must not call upstream without a URL");
});

define("a non-JSON body is a 400", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ body: "not json at all" }), res);
  assert(res.statusCode === 400, `expected 400, got ${res.statusCode}`);
});

define("an empty object is a 422 naming every required field", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ body: {} }), res);
  assert(res.statusCode === 422, `expected 422, got ${res.statusCode}`);
  for (const field of ["name", "email", "org", "interest", "message"]) {
    assert(res.payload.fields[field] === "required", `expected ${field} required`);
  }
  assert(!("role" in res.payload.fields), "role is optional and must not be flagged");
  assert(upstreamCalls.length === 0, "an invalid inquiry must never be forwarded");
});

define("whitespace-only values count as empty", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ body: { ...VALID, name: "   ", message: "  \n  " } }), res);
  assert(res.statusCode === 422, `expected 422, got ${res.statusCode}`);
  assert(res.payload.fields.name === "required", "blank name must be required");
});

define("a malformed email is rejected", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ body: { ...VALID, email: "rina.baznas" } }), res);
  assert(res.statusCode === 422, `expected 422, got ${res.statusCode}`);
  assert(/email/.test(res.payload.fields.email), "expected an email complaint");
});

define("a one-word message is rejected", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ body: { ...VALID, message: "hi" } }), res);
  assert(res.statusCode === 422, `expected 422, got ${res.statusCode}`);
});

define("an over-long field is rejected", async (handler) => {
  const res = mockRes();
  await handler(mockReq({ body: { ...VALID, name: "a".repeat(500) } }), res);
  assert(res.statusCode === 422, `expected 422, got ${res.statusCode}`);
});

define("an oversized body is refused before parsing", async (handler) => {
  const res = mockRes();
  await handler(
    mockReq({ body: VALID, headers: { "content-length": "999999" } }),
    res,
  );
  assert(res.statusCode === 413, `expected 413, got ${res.statusCode}`);
});

define("a valid inquiry returns 200 and forwards only known fields", async (handler) => {
  const res = mockRes();
  await handler(
    mockReq({ body: { ...VALID, sneaky: "drop me", __proto__: "nope" } }),
    res,
  );
  assert(res.statusCode === 200, `expected 200, got ${res.statusCode}`);
  assert(res.payload.ok === true, "expected { ok: true }");
  assert(upstreamCalls.length === 1, "expected exactly one upstream call");

  const sent = JSON.parse(upstreamCalls[0].init.body);
  assert(!("sneaky" in sent), "unknown fields must not reach the mailbox");
  assert(sent.name === VALID.name, "name must be forwarded");
  assert(sent.message === VALID.message, "message must be forwarded");
  assert(Object.keys(sent).length === 6, `expected 6 fields, got ${Object.keys(sent).length}`);
});

define("optional role may be omitted entirely", async (handler) => {
  const { role, ...withoutRole } = VALID;
  const res = mockRes();
  await handler(mockReq({ body: withoutRole }), res);
  assert(res.statusCode === 200, `expected 200, got ${res.statusCode}`);
});

define("an upstream failure surfaces as 502, never as success", async (handler) => {
  upstreamImpl = async () => new Response("boom", { status: 500 });
  const res = mockRes();
  await handler(mockReq({ body: VALID }), res);
  assert(res.statusCode === 502, `expected 502, got ${res.statusCode}`);
});

define("an upstream throw surfaces as 502", async (handler) => {
  upstreamImpl = async () => {
    throw new Error("network down");
  };
  const res = mockRes();
  await handler(mockReq({ body: VALID }), res);
  assert(res.statusCode === 502, `expected 502, got ${res.statusCode}`);
});

define("the upstream response body is not echoed back", async (handler) => {
  upstreamImpl = async () =>
    new Response(JSON.stringify({ secretSheetId: "abc123" }), { status: 200 });
  const res = mockRes();
  await handler(mockReq({ body: VALID }), res);
  assert(res.statusCode === 200, `expected 200, got ${res.statusCode}`);
  assert(
    !JSON.stringify(res.payload).includes("secretSheetId"),
    "upstream internals must not reach the browser",
  );
});

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const originalConsoleError = console.error;

async function main() {
  const handler = await loadHandler();
  process.env.GSCRIPT_URL = "https://example.invalid/exec";

  let failed = 0;
  for (const { name, fn } of cases) {
    upstreamCalls = [];
    upstreamImpl = async () =>
      new Response(JSON.stringify({ ok: true }), { status: 200 });
    // The handler logs on purpose in its error branches; keep the run readable.
    console.error = () => {};
    try {
      await fn(handler);
      console.error = originalConsoleError;
      console.log(`  pass  ${name}`);
    } catch (err) {
      console.error = originalConsoleError;
      failed += 1;
      console.log(`  FAIL  ${name}`);
      console.log(`        ${err.message}`);
    }
  }

  console.log("");
  if (failed > 0) {
    console.log(`${failed} of ${cases.length} contact API checks failed.`);
    process.exit(1);
  }
  console.log(`All ${cases.length} contact API checks passed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
