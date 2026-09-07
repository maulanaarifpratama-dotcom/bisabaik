import type { VercelRequest, VercelResponse } from "@vercel/node";

/* ---------------------------------------------------------------------------
   Contact form forwarder.

   Takes the inquiry from /contact, checks it is actually an inquiry, and
   forwards it to the Google Apps Script endpoint in GSCRIPT_URL.

   Everything specific to this form lives in FIELDS below. Adding, removing or
   loosening a field is one line there; nothing else in this file knows the
   field names.
   --------------------------------------------------------------------------- */

interface FieldRule {
  required?: boolean;
  min?: number;
  max: number;
  /** Applies a light shape check. Not an attempt to fully validate an address. */
  format?: "email";
}

const FIELDS: Record<string, FieldRule> = {
  name: { required: true, min: 2, max: 120 },
  email: { required: true, max: 200, format: "email" },
  org: { required: true, min: 2, max: 160 },
  role: { max: 120 },
  interest: { required: true, max: 60 },
  message: { required: true, min: 10, max: 5000 },
};

/** Enough for a long inquiry, far short of anything worth forwarding. */
const MAX_BODY_BYTES = 20_000;

/** Upstream is a Google Apps Script, which can be slow but not this slow. */
const UPSTREAM_TIMEOUT_MS = 10_000;

/* A deliberately permissive shape check: something, an @, something, a dot,
   something, and no whitespace. Rejecting valid addresses is worse than
   letting an odd one through, because the reply will simply bounce. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Parsed =
  | { ok: true; data: Record<string, string> }
  | { ok: false; fields: Record<string, string> };

function parseBody(raw: unknown): Record<string, unknown> | null {
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return typeof parsed === "object" && parsed !== null
        ? (parsed as Record<string, unknown>)
        : null;
    } catch {
      return null;
    }
  }
  if (typeof raw === "object" && raw !== null && !Array.isArray(raw)) {
    return raw as Record<string, unknown>;
  }
  return null;
}

function validate(body: Record<string, unknown>): Parsed {
  const data: Record<string, string> = {};
  const fields: Record<string, string> = {};

  for (const [name, rule] of Object.entries(FIELDS)) {
    const raw = body[name];
    const value = typeof raw === "string" ? raw.trim() : "";

    if (!value) {
      if (rule.required) fields[name] = "required";
      continue;
    }
    if (value.length > rule.max) {
      fields[name] = `at most ${rule.max} characters`;
      continue;
    }
    if (rule.min && value.length < rule.min) {
      fields[name] = `at least ${rule.min} characters`;
      continue;
    }
    if (rule.format === "email" && !EMAIL.test(value)) {
      fields[name] = "not a valid email address";
      continue;
    }

    data[name] = value;
  }

  // Only known fields are forwarded, so an extra key in the request never
  // reaches the mailbox.
  return Object.keys(fields).length > 0 ? { ok: false, fields } : { ok: true, data };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const endpoint = process.env.GSCRIPT_URL;
  if (!endpoint) {
    console.error("send-contact: GSCRIPT_URL is not set");
    return res.status(500).json({ error: "Contact form is not configured." });
  }

  const rawLength = Number(req.headers["content-length"] ?? 0);
  if (rawLength > MAX_BODY_BYTES) {
    return res.status(413).json({ error: "Message too large." });
  }

  const body = parseBody(req.body);
  if (!body) {
    return res.status(400).json({ error: "Expected a JSON object." });
  }

  const result = validate(body);
  if (!result.ok) {
    // 422 rather than 400: the JSON was fine, the inquiry was not.
    return res.status(422).json({
      error: "Please complete the required fields.",
      fields: result.fields,
    });
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });

    if (!upstream.ok) {
      console.error("send-contact: upstream responded", upstream.status);
      return res.status(502).json({
        error: "Failed to send your inquiry. Please email info@bisabaik.or.id.",
      });
    }

    // The upstream response is not echoed back: the browser only needs to know
    // the inquiry was accepted, and echoing it would leak the script internals.
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-contact: forwarder error", err);
    return res.status(502).json({
      error: "Failed to send your inquiry. Please email info@bisabaik.or.id.",
    });
  }
}
