import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(process.env.GSCRIPT_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:
        typeof req.body === "string"
          ? req.body
          : JSON.stringify(req.body),
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (err) {
    console.error("Forwarder error:", err);
    return res.status(500).json({
      error:
        "Failed to send your inquiry. Please email info@bisabaik.or.id.",
    });
  }
}
