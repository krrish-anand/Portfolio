"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 95 },
      { name: "XGBoost", level: 90 },
      { name: "LightGBM", level: 85 },
      { name: "Ensemble Methods", level: 90 },
      { name: "Feature Engineering", level: 95 },
      { name: "Model Validation", level: 90 },
    ],
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Neural Networks", level: 90 },
      { name: "CNNs", level: 85 },
      { name: "RNNs/LSTMs", level: 85 },
      { name: "Transformers", level: 80 },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 90 },
      { name: "Plotly", level: 85 },
      { name: "EDA", level: 95 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Apache Spark", level: 75 },
      { name: "ETL Pipelines", level: 80 },
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "GitHub Actions", level: 75 },
      { name: "Streamlit", level: 90 },
      { name: "Flask", level: 85 },
    ],
  },
];

export function SkillsDisplay() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skillsData.map((skillGroup, groupIndex) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card p-6"
        >
          <h3 className="mb-6 text-lg font-semibold">{skillGroup.category}</h3>

          <div className="space-y-4">
            {skillGroup.skills.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className="space-y-2"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 0.8,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
