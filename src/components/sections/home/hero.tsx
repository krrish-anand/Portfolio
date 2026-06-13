"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="section-padding container-max">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="mb-6 inline-block">
          <span className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
          Hi, I'm <span className="gradient-text">Krrish Anand</span>
        </h1>

        <p className="mb-6 text-xl text-muted-foreground">
          Data Scientist & Machine Learning Engineer passionate about building intelligent systems
          that solve real-world problems. Currently pursuing B.Tech in Information Technology at VIT
          University with a CGPA of 9.3/10.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Mail className="h-5 w-5" />
            Get In Touch
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Download className="h-5 w-5" />
            View Resume
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex gap-6">
          {[
            { name: "GitHub", url: "https://github.com/krrish-anand" },
            { name: "LinkedIn", url: "https://linkedin.com/in/krrishanand" },
            { name: "LeetCode", url: "https://leetcode.com" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
