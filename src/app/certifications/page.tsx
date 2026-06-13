import type { Metadata } from "next";
import { CertificationsGrid } from "@/components/sections/certifications/certifications-grid";

export const metadata: Metadata = {
  title: "Certifications",
  description: "My professional certifications and credentials in AI, Machine Learning, and Data Science.",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Certifications</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Professional certifications demonstrating my expertise in AI, Machine Learning, and Data Science.
        </p>
      </div>

      <CertificationsGrid />
    </div>
  );
}
