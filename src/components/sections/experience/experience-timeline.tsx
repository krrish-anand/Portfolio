"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Science Intern",
    company: "SmartBridge Technologies",
    type: "internship",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Dec 2023",
    current: false,
    description:
      "Developed and deployed machine learning models for business intelligence and analytics. Collaborated with senior data scientists on fraud detection and customer segmentation projects.",
    achievements: [
      "Built ML pipeline for fraud detection achieving 93% accuracy",
      "Analyzed 100K+ transactions using SQL and Python",
      "Created interactive Tableau dashboards for stakeholders",
    ],
  },
  {
    title: "ML Research Intern",
    company: "VIT Research Lab",
    type: "research",
    location: "Vellore, Tamil Nadu",
    startDate: "Jan 2023",
    endDate: "May 2023",
    current: false,
    description:
      "Conducted research on NLP and deep learning applications. Implemented and evaluated transformer-based models for text classification tasks.",
    achievements: [
      "Published research paper on BERT fine-tuning",
      "Implemented 3 different NLP architectures",
      "Achieved state-of-the-art results on benchmark dataset",
    ],
  },
  {
    title: "Freelance ML Developer",
    company: "Self-Employed",
    type: "freelance",
    location: "Remote",
    startDate: "Jul 2022",
    endDate: "Present",
    current: true,
    description:
      "Building and deploying custom ML solutions for clients. Working on diverse projects ranging from computer vision to time series forecasting.",
    achievements: [
      "Completed 10+ successful client projects",
      "Maintained 4.9/5 client rating",
      "Specialized in end-to-end ML pipeline development",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-lg border border-border bg-card p-6 before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-accent md:before:left-[-21px] md:before:top-8"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {experience.type}
            </span>
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            <div className="font-medium text-foreground">{experience.company}</div>
            <div>{experience.location}</div>
            <div>
              {experience.startDate} — {experience.current ? "Present" : experience.endDate}
            </div>
          </div>

          <p className="mb-4 text-muted-foreground">{experience.description}</p>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Achievements</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
