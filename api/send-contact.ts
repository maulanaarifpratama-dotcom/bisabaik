import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

/**
 * Contact form handler
 * - Compatible with Lovable form field names
 * - Uses Google Workspace SMTP Relay (IP-based, no auth)
 * - Safe for Vercel
 */

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

const clean = (value: unknown, max = 2000): string => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
};

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};

    // ✅ FIELD MAPPING (frontend → backend)
    const name = clean(body.name, 200);
    const email = clean(body.email, 254);

    const organization =
      clean(body.organization, 200) || clean(body.org, 200);

    const role = clean(body.role, 200);

    const interest =
      clean(body.interest, 100) ||
      clean(body.focus, 100) ||
      clean(body.topic, 100);

    const message = clean(body.message, 5000);

    // ✅ Validation (robust)
    if (!name || !email || !organization || !interest || !message) {
      return res.status(400).json({
        error: "Please complete all required fields.",
      });
    }

    if (!isEmail(email)) {
      return res.status(400).json({
        error: "Invalid email address.",
      });
    }

    const interestLabels: Record<string, string> = {
      "program-delivery": "Program delivery partnership",
      "exit-strategy": "Exit strategy & transition",
      "msme-aggregation": "MSME aggregation via PasarBaik",
      "circular-economy": "Circular economy & waste management",
      briefing: "Insights briefing",
      other: "Other",
    };

    const interestLabel = interestLabels[interest] || interest;

    const subject = `[Bisabaik.org – Program Inquiry] ${organization}`;

    const text = `
New inquiry via bisabaik.org

Name: ${name}
Email: ${email}
Organization: ${organization}
Role: ${role || "-"}
Interest: ${interestLabel}

Message:
${message}
    `.trim();

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; color:#111; max-width:640px">
        <h2>New inquiry via bisabaik.org</h2>
        <table style="font-size:14px;line-height:1.6">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Organization</strong></td><td>${escapeHtml(
            organization
          )}</td></tr>
          <tr><td><strong>Role</strong></td><td>${escapeHtml(role || "-")}</td></tr>
          <tr><td><strong>Interest</strong></td><td>${escapeHtml(
            interestLabel
          )}</td></tr>
        </table>
        <h3>Message</h3>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
      </div>
    `;

    // ✅ SMTP Relay with EHLO domain alignment (CRITICAL)
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.gmail.com",
      port: 587,
      secure: false,
      name: "bisabaik.or.id", // EHLO must match Workspace domain
    });

    await transporter.sendMail({
      from: "BisaBaik Foundation <info@bisabaik.or.id>",
      to: "info@bisabaik.or.id",
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-contact error:", err);
    return res.status(500).json({
      error:
        "Failed to send your inquiry. Please contact info@bisabaik.or.id.",
    });
  }
}
