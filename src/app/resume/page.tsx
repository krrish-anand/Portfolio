import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Resume | Krrish Anand",
  description: "View and download my resume",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Back
              </Link>
              <h1 className="text-2xl font-bold">My Resume</h1>
            </div>
            <a
              href="/resume.pdf"
              download="Krrish_Anand_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="container-max py-8">
        <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg">
          <div className="w-full h-screen flex items-center justify-center bg-muted/50">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
              title="Resume"
              className="w-full h-full"
              style={{ minHeight: "600px" }}
            />
          </div>
        </div>

        {/* Alternative Download Link */}
        <div className="mt-8 rounded-lg border border-border bg-secondary/50 p-6 text-center">
          <p className="text-muted-foreground mb-4">
            Can't view the PDF? Download it directly:
          </p>
          <a
            href="/resume.pdf"
            download="Krrish_Anand_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-accent-foreground hover:opacity-90 transition-opacity font-medium"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
