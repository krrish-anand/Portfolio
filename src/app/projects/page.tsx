import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/projects/projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of AI, ML, Data Science, and Analytics projects showcasing real-world applications.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A collection of my work spanning machine learning, data science, and full-stack
          development. Each project represents my growth and learning in different areas of AI and
          software engineering.
        </p>
      </div>

      <ProjectsGrid />
    </div>
  );
}
