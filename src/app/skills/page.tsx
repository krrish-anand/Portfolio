import type { Metadata } from "next";
import { SkillsDisplay } from "@/components/sections/skills/skills-display";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "My technical skills in Machine Learning, Data Science, Programming, and Data Engineering.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Technical Skills</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A comprehensive overview of my technical expertise across various domains of data science,
          machine learning, and software engineering.
        </p>
      </div>

      <SkillsDisplay />
    </div>
  );
}
