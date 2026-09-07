/**
 * Deploy readiness check for Vercel. Run after a build, before pushing:
 *
 *   npm run verify
 *
 * It checks the things that break a redeploy quietly rather than loudly:
 * config that parses but does not do what it says, a build output missing a
 * file, a dev artifact left in public/, or a host that disagrees with itself.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const exists = (p) => fs.existsSync(path.join(root, p));

const problems = [];
const notes = [];
const passes = [];

const check = (label, condition, detail) => {
  if (condition) passes.push(label);
  else problems.push(detail ? `${label}\n         ${detail}` : label);
};

/* --- 1. The canonical host must agree everywhere ------------------------- */

const astroConfig = read("astro.config.mjs");
const siteMatch = astroConfig.match(/const SITE = "([^"]+)"/);
const site = siteMatch?.[1];
check("astro.config.mjs declares a site URL", Boolean(site));

const vercel = JSON.parse(read("vercel.json"));

check(
  "vercel.json is valid JSON",
  typeof vercel === "object" && vercel !== null,
);

const redirects = vercel.redirects ?? [];
const hostRedirects = redirects.filter((r) =>
  (r.has ?? []).some((h) => h.type === "host"),
);

check(
  "a host redirect is configured",
  hostRedirects.length > 0,
  "www and the apex would both serve the same pages, which splits indexing",
);

// The trap that bit us once: "/:path*" does not match the bare root, so the
// root needs its own rule or www.example.com/ keeps answering 200.
check(
  "the host redirect covers the bare root",
  hostRedirects.some((r) => r.source === "/"),
  'add a rule with source "/" alongside "/:path*"',
);
check(
  "the host redirect covers sub-paths",
  hostRedirects.some((r) => r.source.includes(":path*") || r.source.includes("(.*)")),
);
check(
  "host redirects are permanent",
  hostRedirects.every((r) => r.permanent === true),
  "a temporary redirect will not consolidate ranking signals",
);
check(
  "host redirects point at the declared site URL",
  site ? hostRedirects.every((r) => r.destination.startsWith(site)) : false,
  `expected destinations under ${site}`,
);

/* --- 2. Build output ---------------------------------------------------- */

const REQUIRED_OUTPUT = [
  "dist/index.html",
  "dist/id/index.html",
  "dist/404.html",
  "dist/robots.txt",
  "dist/llms.txt",
  "dist/sitemap-index.xml",
  "dist/privacy/index.html",
  "dist/id/privacy/index.html",
];

if (!exists("dist")) {
  problems.push("dist/ is missing, run npm run build first");
} else {
  for (const file of REQUIRED_OUTPUT) {
    check(`built ${file}`, exists(file));
  }

  const sitemap = read("dist/sitemap-0.xml");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  check(
    "no sitemap URL carries a trailing slash",
    locs.every((u) => u === `${site}/` || !u.endsWith("/")),
    "canonical tags omit it, so the sitemap must too",
  );
  check(
    "every sitemap URL is on the canonical host",
    locs.every((u) => u.startsWith(site)),
  );
  check("sitemap lists both languages", locs.some((u) => u.includes("/id")));

  const home = read("dist/index.html");
  check("home page emits a canonical link", home.includes('rel="canonical"'));
  check("home page emits hreflang alternates", home.includes('hreflang="id"'));
  check("home page emits an x-default", home.includes('hreflang="x-default"'));
  check(
    "home page ships no external script bundle",
    !/<script[^>]+src="\/_astro\//.test(home),
    "the site is meant to ship zero framework JavaScript",
  );
}

/* --- 3. Serverless functions -------------------------------------------- */

check("api/send-contact.ts is present", exists("api/send-contact.ts"));

const handler = exists("api/send-contact.ts") ? read("api/send-contact.ts") : "";
const envVars = [...handler.matchAll(/process\.env\.([A-Z0-9_]+)/g)].map((m) => m[1]);
const uniqueEnv = [...new Set(envVars)];

check(
  "the handler validates before forwarding",
  handler.includes("422"),
  "without validation an empty inquiry is forwarded and answered 200",
);
check(
  "the handler checks the upstream response",
  handler.includes("upstream.ok") || handler.includes("response.ok"),
  "an upstream failure would otherwise be reported to the visitor as success",
);

for (const name of uniqueEnv) {
  notes.push(`set ${name} in the Vercel project environment before redeploying`);
}

/* --- 4. Nothing stray in public/ ---------------------------------------- */

const publicFiles = fs.readdirSync(path.join(root, "public"));
const stray = publicFiles.filter((f) => f.startsWith("__") || f.endsWith(".tmp"));
check(
  "no dev artifacts left in public/",
  stray.length === 0,
  stray.length ? `found: ${stray.join(", ")}` : "",
);

/* --- Report -------------------------------------------------------------- */

console.log(`\n  ${passes.length} checks passed.`);

if (notes.length > 0) {
  console.log("\n  Before you redeploy:");
  for (const note of [...new Set(notes)]) console.log(`    - ${note}`);
  console.log("    - Vercel builds from main; a push triggers production.");
}

if (problems.length > 0) {
  console.log(`\n  ${problems.length} problem(s):`);
  for (const problem of problems) console.log(`    x  ${problem}`);
  console.log("");
  process.exit(1);
}

console.log("\n  Ready to push.\n");
