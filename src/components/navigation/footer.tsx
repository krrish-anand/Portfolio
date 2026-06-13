import Link from "next/link";
import { GitBranch, Briefcase, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-max py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Data Analyst & ML Engineer focused on building intelligent systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/resume" className="hover:text-foreground transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/krrish-anand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/krrishanand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Briefcase className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=krrishanand3832@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Krrish Anand
          </p>
        </div>
      </div>
    </footer>
  );
}
