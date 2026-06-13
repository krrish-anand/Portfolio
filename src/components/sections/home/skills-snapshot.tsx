"use client";

import { motion } from "framer-motion";

const skills = [
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Data Analysis",
  "SQL",
  "Scikit-learn",
];

export function SkillsSnapshot() {
  return (
    <section className="section-padding border-y border-border bg-secondary/30">
      <div className="container-max">
        <h2 className="mb-8 text-3xl font-bold">Core Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
