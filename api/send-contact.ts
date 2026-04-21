import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// Vercel serverless function: sends contact form submissions via
// Google Workspace SMTP Relay (smtp-relay.gmail.com:587, no auth).
// The Workspace SMTP Relay service must be configured to accept mail
// from Vercel's IP ranges, with "Require SMTP Authentication" disabled.
//
// Optional override:
//   CONTACT_TO -> recipient address (defaults to info@bisabaik.or.id)
//   CONTACT_FROM -> sender address (defaults to info@bisabaik.or.id)

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

const str = (value: unknown, max = 2000): string => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const TO_ADDRESS = process.env.CONTACT_TO || "info@bisabaik.or.id";
  const FROM_ADDRESS = process.env.CONTACT_FROM || "info@bisabaik.or.id";

  try {
    const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) ?? {};

    const name = str(body.name, 200);
    const email = str(body.email, 254);
    const org = str(body.org, 200);
    const role = str(body.role, 200);
    const interest = str(body.interest, 100);
    const message = str(body.message, 5000);

    if (!name || !email || !org || !interest || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ error: "Please provide a valid email address." });
    }

    const subject = `[Bisabaik.org – Program Inquiry] ${org}`;

    const interestLabels: Record<string, string> = {
      "program-delivery": "Program delivery partnership",
      "exit-strategy": "Exit strategy & transition",
      "msme-aggregation": "MSME aggregation via PasarBaik",
      "circular-economy": "Circular economy & waste management",
      briefing: "Insights briefing for our team",
      other: "Other",
    };
    const interestLabel = interestLabels[interest] || interest;

    const text = [
      `New inquiry from the BisaBaik website`,
      ``,
      `Name:         ${name}`,
      `Email:        ${email}`,
      `Organization: ${org}`,
      `Role:         ${role || "—"}`,
      `Interest:     ${interestLabel}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    const html = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#111; max-width:640px;">
        <h2 style="margin:0 0 16px;font-size:18px;">New inquiry from the BisaBaik website</h2>
        <table style="border-collapse:collapse;font-size:14px;line-height:1.6;">
          <tr><td style="padding:4px 12px 4px 0;color:#666;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666;">Organization</td><td>${escapeHtml(org)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666;">Role</td><td>${escapeHtml(role || "—")}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666;">Interest</td><td>${escapeHtml(interestLabel)}</td></tr>
        </table>
        <h3 style="margin:24px 0 8px;font-size:14px;color:#666;text-transform:uppercase;letter-spacing:0.08em;">Message</h3>
        <div style="white-space:pre-wrap;font-size:14px;line-height:1.6;">${escapeHtml(message)}</div>
      </div>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"BisaBaik Website" <${SMTP_USER}>`,
      to: TO_ADDRESS,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-contact error:", err);
    return res
      .status(500)
      .json({ error: "Failed to send your inquiry. Please email info@bisabaik.or.id directly." });
  }
}
