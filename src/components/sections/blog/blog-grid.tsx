"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Understanding Neural Networks: From Basics to Practice",
    excerpt:
      "A comprehensive guide to neural networks, starting from the fundamentals of perceptrons to implementing deep neural networks with TensorFlow.",
    date: "Mar 15, 2024",
    category: "Machine Learning",
    slug: "understanding-neural-networks",
  },
  {
    title: "Data Preprocessing Best Practices in Python",
    excerpt:
      "Techniques and tools for effective data preprocessing, cleaning, and feature engineering using Pandas and Scikit-learn.",
    date: "Mar 10, 2024",
    category: "Data Science",
    slug: "data-preprocessing-best-practices",
  },
  {
    title: "Building Production-Ready ML Models",
    excerpt:
      "Strategies for deploying, monitoring, and maintaining machine learning models in production environments.",
    date: "Mar 5, 2024",
    category: "Engineering",
    slug: "production-ready-ml-models",
  },
  {
    title: "Natural Language Processing with BERT",
    excerpt:
      "Deep dive into BERT architecture and how to fine-tune pre-trained models for specific NLP tasks.",
    date: "Feb 28, 2024",
    category: "NLP",
    slug: "nlp-with-bert",
  },
];

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
          className="group cursor-pointer rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground"></span>
          </div>

          <h3 className="mb-2 text-xl font-semibold group-hover:text-accent transition-colors">
            {post.title}
          </h3>

          <p className="mb-4 text-muted-foreground">{post.excerpt}</p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <time>{post.date}</time>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
