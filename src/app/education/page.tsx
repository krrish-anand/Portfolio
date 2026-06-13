import type { Metadata } from "next";
import { EducationTimeline } from "@/components/sections/education/education-timeline";

export const metadata: Metadata = {
  title: "Education",
  description:
    "My educational background, coursework, and academic achievements in Information Technology.",
};

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Education</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          My academic journey, coursework, achievements, and research work in Information
          Technology and Computer Science.
        </p>
      </div>

      <EducationTimeline />
    </div>
  );
}
