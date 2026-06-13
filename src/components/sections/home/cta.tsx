"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="section-padding border-t border-border bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            I'm always interested in hearing about new opportunities, collaborations, and interesting problems. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-8 py-3 text-primary-foreground hover:opacity-90 transition-opacity font-medium"
            >
              Send me an email
            </Link>
            <a
              href="https://linkedin.com/in/krrishanand"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-8 py-3 hover:bg-secondary transition-colors font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
