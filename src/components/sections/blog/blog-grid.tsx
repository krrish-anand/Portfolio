"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export function BlogGrid() {
  return (
    <div className="space-y-6">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group block rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>

            <h3 className="mb-2 text-xl font-semibold group-hover:text-accent transition-colors">
              {post.title}
            </h3>

            <p className="mb-4 text-muted-foreground">{post.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <time>{post.date}</time>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
