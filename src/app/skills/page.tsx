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
        <h1 className="mb-4 text-4xl font-bold">Skills</h1>
      </div>

      <SkillsDisplay />
    </div>
  );
}
