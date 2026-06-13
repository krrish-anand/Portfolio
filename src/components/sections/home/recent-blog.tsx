"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const recentPosts = [
  {
    title: "Understanding Neural Networks: From Basics to Practice",
    excerpt: "A comprehensive guide to neural networks and how to implement them with TensorFlow.",
    date: "Mar 15, 2024",
    category: "Machine Learning",
  },
  {
    title: "Data Preprocessing Best Practices in Python",
    excerpt: "Techniques and tools for effective data preprocessing and cleaning.",
    date: "Mar 10, 2024",
    category: "Data Science",
  },
  {
    title: "Building Production-Ready ML Models",
    excerpt: "Strategies for deploying and maintaining machine learning models in production.",
    date: "Mar 5, 2024",
    category: "Engineering",
  },
];

export function RecentBlog() {
  return (
    <section className="section-padding container-max">
      <div className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Latest Blog Posts</h2>
        <p className="max-w-2xl text-muted-foreground">
          Insights and tutorials on machine learning, data science, and software engineering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs">{post.category}</span>
            </div>
            <h3 className="mb-2 font-semibold group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 hover:bg-secondary transition-colors"
        >
          View All Posts <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
