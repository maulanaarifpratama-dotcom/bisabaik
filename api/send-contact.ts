import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

/**
 * Final contact form handler for bisabaik.org
 * - Vercel Serverless Function
 * - Google Workspace SMTP Relay (NO AUTH)
 * - Robust field mapping to match Lovable frontend
 */

const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

const clean = (value: unknown, max = 2000): string => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ✅ Parse body safely (Lovable sometimes sends json or object)
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};

    // ✅ Robust field mapping (THIS FIXES YOUR ISSUE)
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

    const subject = `[Bisabaik.org – Program Inquiry] ${organization}`;

    // ✅ SMTP Relay — EHLO aligned (CRITICAL)
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.gmail.com",
      port: 587,
      secure: false,
      name: "bisabaik.or.id", // EHLO domain must match Workspace domain
    });

    await transporter.sendMail({
      from: "BisaBaik Foundation <info@bisabaik.or.id>",
      to: "info@bisabaik.or.id",
      replyTo: `"${name}" <${email}>`,
      subject,
      text: `
New inquiry via bisabaik.org

Name: ${name}
Email: ${email}
Organization: ${organization}
Role: ${role || "-"}
Interest: ${interest}

Message:
${message}
      `.trim(),
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
