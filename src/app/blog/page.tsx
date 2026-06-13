import type { Metadata } from "next";
import { BlogGrid } from "@/components/sections/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical blog posts about Machine Learning, Data Science, Python, and AI development.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Technical Blog</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Insights, tutorials, and deep dives into machine learning, data science, and software
          engineering. I write about concepts I've learned and problems I've solved.
        </p>
      </div>

      <BlogGrid />
    </div>
  );
}
