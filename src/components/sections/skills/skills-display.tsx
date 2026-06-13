"use client";

import { motion } from "framer-motion";

const skillsData = [

  {
    category: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "SQL", level: 83 },
    ],
  },
  {
    category: "Databases & Engineering",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "ETL Pipelines", level: 75 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "Ensemble Methods", level: 80 },
      { name: "Feature Engineering", level: 85 },
      { name: "Model Validation", level: 83 },
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      { name: "AWS", level: 72 },
      { name: "REST API", level: 78 },
      { name: "Git", level: 85 },
      { name: "Streamlit", level: 85 }
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 82 },
      { name: "Seaborn", level: 80 },
      { name: "Plotly", level: 78 },
      { name: "EDA", level: 85 },
    ],
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "TensorFlow", level: 82 },
      { name: "PyTorch", level: 80 },
      { name: "Neural Networks", level: 85 },
      { name: "CNNs", level: 80 },
      { name: "RNNs/LSTMs", level: 78 },
      { name: "Transformers", level: 75 },
    ],
  },
  {
    category: "Generative AI",
    skills: [
      { name: "LLMs", level: 78 },
      { name: "Prompt Engineering", level: 85 },
      { name: "RAG", level: 75 },
      { name: "LangChain", level: 75 },
      { name: "OpenAI API", level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Jupyter Notebook", level: 85 },
      { name: "Google Colab", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 78 },
      { name: "Databricks", level: 75 },
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
