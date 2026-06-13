import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { StatsSection } from "@/components/sections/home/stats-section";
import { RecentBlog } from "@/components/sections/home/recent-blog";
import { SkillsSnapshot } from "@/components/sections/home/skills-snapshot";
import { CTA } from "@/components/sections/home/cta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. I'm a Data Scientist and ML Engineer passionate about building scalable AI solutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
      <SkillsSnapshot />
      <RecentBlog />
      <CTA />
    </>
  );
}
