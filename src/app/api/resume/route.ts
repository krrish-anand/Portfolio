// Placeholder resume.pdf served from public folder
// Update this route to serve your actual resume

import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // In production, replace this path with your actual resume location
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");
    const resumeBuffer = await fs.readFile(resumePath);

    return new Response(resumeBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Krrish-Anand-Resume.pdf"',
        "Cache-Control": "public, max-age=86400", // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error("Resume download error:", error);
    return new Response(
      JSON.stringify({ error: "Resume not found" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
