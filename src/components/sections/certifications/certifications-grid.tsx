"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Oracle Certified AI Foundations Associate",
    issuer: "Oracle",
    issuedDate: "Jan 2025",
    credentialUrl: "https://oracle.com",
    credentialId: "OCI-2025-001",
    icon: "🏆",
  },
  {
    title: "Oracle Certified AI Professional Associate",
    issuer: "Oracle",
    issuedDate: "Feb 2025",
    credentialUrl: "https://oracle.com",
    credentialId: "OCI-2025-002",
    icon: "🏆",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "SmartBridge & Google",
    issuedDate: "Dec 2023",
    credentialUrl: "https://coursera.org",
    credentialId: "ML-2023-001",
    icon: "🎓",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issuedDate: "Nov 2023",
    credentialUrl: "https://coursera.org",
    credentialId: "DL-2023-001",
    icon: "🎓",
  },
  {
    title: "Python for Data Science",
    issuer: "DataCamp",
    issuedDate: "Oct 2023",
    credentialUrl: "https://datacamp.com",
    credentialId: "PY-2023-001",
    icon: "🐍",
  },
];

export function CertificationsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.credentialId}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors"
        >
          <div className="mb-4 flex items-start justify-between">
            <div className="text-3xl">{cert.icon}</div>
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {cert.issuedDate}
            </span>
          </div>

          <h3 className="mb-2 text-lg font-semibold group-hover:text-accent transition-colors">
            {cert.title}
          </h3>

          <p className="mb-4 text-sm text-muted-foreground">{cert.issuer}</p>

          <div className="mb-4 rounded-lg bg-secondary/30 p-3">
            <p className="text-xs font-mono text-muted-foreground break-all">
              {cert.credentialId}
            </p>
          </div>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all"
            >
              Verify <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </motion.div>
      ))}
    </div>
  );
}
