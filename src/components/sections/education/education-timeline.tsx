"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "VIT University",
    location: "Vellore, Tamil Nadu",
    startDate: "Aug 2021",
    endDate: "May 2027",
    gpa: "9.3/10",
    description:
      "Pursuing B.Tech in Information Technology with specialization in AI and Machine Learning. Strong foundation in data structures, algorithms, and software engineering principles.",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Data Science",
      "Database Management",
      "Web Development",
      "Computer Vision",
      "Natural Language Processing",
    ],
    achievements: [
      "CGPA: 9.3/10",
      "Dean's List every semester",
      "Active in AI/ML research projects",
      "President of Data Science Club",
    ],
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science (PCM + CS)",
    institution: "Sunbeam English School",
    location: "Varanasi, Uttar Pradesh",
    startDate: "2020",
    endDate: "2022",
    gpa: "93.4%",
    description: "Completed high school education with focus on science and mathematics.",
    achievements: [
      "Percentage: 93.4%",
      "Ranked in top 5% of class",
      "Scholarship for academic excellence",
    ],
  },
];

export function EducationTimeline() {
  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative rounded-lg border border-border bg-card p-6 before:absolute before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-4 before:w-4 before:rounded-full before:bg-accent md:before:left-[-21px] md:before:top-8"
        >
          <div className="mb-2 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.field}</p>
            </div>
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {edu.gpa}
            </span>
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            <div className="font-medium text-foreground">{edu.institution}</div>
            <div>{edu.location}</div>
            <div>
              {edu.startDate} — {edu.endDate}
            </div>
          </div>

          <p className="mb-4 text-muted-foreground">{edu.description}</p>

          {edu.coursework && (
            <div className="mb-4 space-y-2">
              <h4 className="font-semibold text-sm">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Achievements</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {edu.achievements.map((achievement) => (
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
