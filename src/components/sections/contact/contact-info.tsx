import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Email */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Mail className="h-5 w-5 text-accent" />
        </div>
        <h3 className="mb-2 font-semibold">Email</h3>
        <a
          href="mailto:krrishanand3832@gmail.com"
          className="text-muted-foreground hover:text-accent transition-colors break-all"
        >
          krrishanand3832@gmail.com
        </a>
      </div>

      {/* Phone */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <Phone className="h-5 w-5 text-accent" />
        </div>
        <h3 className="mb-2 font-semibold">Phone</h3>
        <a
          href="tel:+919709214959"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          +91 970 921 4959
        </a>
      </div>

      {/* Location */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          <MapPin className="h-5 w-5 text-accent" />
        </div>
        <h3 className="mb-2 font-semibold">Location</h3>
        <p className="text-muted-foreground">Vellore, Tamil Nadu, India</p>
      </div>

      {/* Social Links */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold">Connect</h3>
        <div className="space-y-2 text-sm">
          <Link
            href="https://github.com/krrish-anand"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground hover:text-accent transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/krrishanand"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground hover:text-accent transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="https://kaggle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground hover:text-accent transition-colors"
          >
            Kaggle
          </Link>
        </div>
      </div>
    </div>
  );
}
