import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, interests, and career goals.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>

      <div className="space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Background</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I'm Krrish Anand, a Data Science and Machine Learning engineer pursuing my Bachelor's
            degree in Information Technology at VIT University with a CGPA of 9.3/10. My passion
            lies in building intelligent systems that solve real-world problems through data-driven
            insights and advanced machine learning techniques.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Career Goals</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I aim to work on cutting-edge AI/ML projects that make a tangible impact. I'm
            particularly interested in roles at leading tech companies and AI research organizations
            where I can contribute to the future of artificial intelligence and machine learning.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Research Interests</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Natural Language Processing",
              "Deep Learning & Neural Networks",
              "Computer Vision",
              "Model Optimization",
              "Federated Learning",
              "Explainable AI",
            ].map((interest) => (
              <div
                key={interest}
                className="rounded-lg border border-border bg-card p-4 text-card-foreground"
              >
                {interest}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Technical Philosophy</h2>
          <p className="leading-relaxed text-muted-foreground">
            I believe in writing clean, maintainable code that prioritizes clarity and efficiency.
            I'm a strong advocate for understanding the mathematical foundations of ML algorithms
            and applying best practices in model validation and evaluation. I emphasize the
            importance of rigorous experimentation and data-driven decision making.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Professional Values</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Continuous learning and staying updated with latest ML developments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Collaboration and knowledge sharing with the community</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Building ethical AI solutions with fairness and transparency</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Turning complex problems into elegant, scalable solutions</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
