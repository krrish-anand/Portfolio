"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const projects = [
  {
    title: "Auto Insurance Fraud Detection System",
    description:
      "Machine learning model for detecting fraudulent insurance claims using ensemble methods.",
    longDescription:
      "Conducted comprehensive data preprocessing and EDA on insurance claims data. Implemented and compared multiple ML algorithms (Logistic Regression, Decision Tree, KNN, XGBoost, Extra Trees). Achieved 93.05% ROC-AUC score. Deployed real-time prediction system using Streamlit.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit"],
    category: "Machine Learning",
    status: "completed",
    metrics: {
      accuracy: "93.05%",
      rocAuc: "0.9305",
      fScore: "0.91",
    },
    achievements: [
      "Achieved 93.05% ROC-AUC score",
      "Implemented 5 different ML algorithms",
      "Deployed production-ready Streamlit app",
      "Comprehensive feature importance analysis",
    ],
    githubLink: "https://github.com/krrish-anand/Auto_Fraud_Detection",
    liveLink: "https://fraud-detection.streamlit.app",
    image: "/projects/fraud-detection.jpg",
  },
  {
    title: "Online Speech Moderation System",
    description:
      "NLP-based system for detecting and filtering hate speech and offensive content online.",
    longDescription:
      "Built end-to-end NLP pipeline for hate speech detection. Implemented and compared SimpleRNN, LSTM, and BERT models. Fine-tuned BERT achieving 78% accuracy. Deployed Flask web application with real-time prediction capabilities.",
    technologies: ["Python", "TensorFlow", "BERT", "Flask", "Scikit-learn", "NLTK"],
    category: "NLP",
    status: "completed",
    metrics: {
      accuracy: "78%",
      precision: "0.82",
      recall: "0.75",
    },
    achievements: [
      "Trained and compared 3 deep learning architectures",
      "Fine-tuned BERT transformer model",
      "Built Flask API for predictions",
      "Real-time text classification system",
    ],
    githubLink: "https://github.com/krrish-anand/online-speech-moderation-system",
    liveLink: "https://speech-moderation.herokuapp.com",
    image: "/projects/speech-moderation.jpg",
  },
  {
    title: "Superstore Sales Analysis with SQL",
    description:
      "Comprehensive data analysis and visualization of superstore sales patterns using SQL and Tableau.",
    longDescription:
      "Performed detailed exploratory data analysis on superstore dataset. Created complex SQL queries for business insights. Built interactive Tableau dashboards for visualization. Identified key trends in regional sales, customer segments, and product performance.",
    technologies: ["MySQL", "Tableau", "SQL", "Excel"],
    category: "Data Analytics",
    status: "completed",
    metrics: {
      queriesOptimized: "15+",
      dashboards: "8",
      insights: "20+",
    },
    achievements: [
      "Analyzed 9,994+ transactions",
      "Created 8 interactive Tableau dashboards",
      "Identified key business patterns",
      "Optimized SQL queries for performance",
    ],
    githubLink: "https://github.com/krrish-anand/Superstore",
    liveLink: "https://public.tableau.com/superstore-analysis",
    image: "/projects/superstore-analysis.jpg",
  },
];

export function ProjectsGrid() {
  return (
    <div className="space-y-12">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg border border-border"
        >
          <div className="p-6">
            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 inline-block">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground">{project.longDescription}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-6 py-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-sm font-semibold text-accent">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-semibold">Key Achievements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors"
                  >
                    <FileText className="h-4 w-4" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
