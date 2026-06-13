import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional journey including internships, research, and freelance work.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Experience</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A timeline of my professional experiences, internships, and roles where I've applied my
          skills in real-world scenarios.
        </p>
      </div>

      <ExperienceTimeline />
    </div>
  );
}
