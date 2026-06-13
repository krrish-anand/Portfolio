"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Auto Insurance Fraud Detection System",
    description:
      "ML model achieving 93.05% ROC-AUC score for fraud detection with Streamlit deployment.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "XGBoost"],
    category: "Machine Learning",
  },
  {
    title: "Online Speech Moderation System",
    description: "BERT-based NLP system for hate speech detection with 78% accuracy.",
    technologies: ["Python", "TensorFlow", "BERT", "Flask"],
    category: "NLP",
  },
  {
    title: "Superstore Sales Analysis",
    description: "Comprehensive SQL analysis with Tableau visualizations of sales patterns.",
    technologies: ["MySQL", "Tableau", "SQL"],
    category: "Data Analytics",
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding container-max">
      <div className="mb-12">
        <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
        <p className="max-w-2xl text-muted-foreground">
          A selection of my most impactful work showcasing expertise in Machine Learning, Data Science, and Visualizations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
          >
            <div className="mb-4">
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                {project.category}
              </span>
            </div>
            <h3 className="mb-2 font-semibold text-lg group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 hover:bg-secondary transition-colors"
        >
          View All Projects <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
