"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Academic CGPA", value: "9.24/10" },
  { label: "Certifications", value: "5+" },
];

export function StatsSection() {
  return (
    <section className="section-padding border-y border-border bg-secondary/30">
      <div className="container-max">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
