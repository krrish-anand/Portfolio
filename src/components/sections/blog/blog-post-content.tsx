"use client";

import { Section } from "@/lib/blog-data";

interface Props {
  sections: Section[];
}

export function BlogPostContent({ sections }: Props) {
  return (
    <article className="prose-custom space-y-6 text-foreground">
      {sections.map((section, i) => {
        switch (section.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 text-2xl font-bold border-b border-border pb-2"
              >
                {section.text}
              </h2>
            );

          case "h3":
            return (
              <h3 key={i} className="mt-8 text-xl font-semibold">
                {section.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="leading-7 text-muted-foreground">
                {section.text}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-2">
                {section.items?.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 leading-7 text-muted-foreground"
                  >
                    <span className="mt-1 shrink-0 text-accent">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="space-y-2 pl-6 list-decimal">
                {section.items?.map((item, j) => (
                  <li key={j} className="leading-7 text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ol>
            );

          case "code":
            return (
              <div key={i} className="relative">
                {section.language && (
                  <span className="absolute right-3 top-3 text-xs text-muted-foreground font-mono opacity-60">
                    {section.language}
                  </span>
                )}
                <pre className="overflow-x-auto rounded-lg border border-border bg-secondary/40 p-5 text-sm leading-relaxed">
                  <code className="font-mono text-foreground whitespace-pre">
                    {section.text}
                  </code>
                </pre>
              </div>
            );

          case "callout":
            return (
              <div
                key={i}
                className="rounded-lg border border-accent/30 bg-accent/5 px-5 py-4"
              >
                <p className="leading-7 text-foreground italic">{section.text}</p>
              </div>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
