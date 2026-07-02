import { Briefcase, GitBranch, Mail, MapPin, Phone, Users } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {/* Email */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <h3 className="font-semibold">Email</h3>
        </div>
        <a
          href="mailto:krrishanand3832@gmail.com"
          className="text-sm text-muted-foreground hover:text-accent transition-colors break-all"
        >
          krrishanand3832@gmail.com
        </a>
      </div>

      {/* Phone */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <h3 className="font-semibold">Phone</h3>
        </div>
        <a
          href="tel:+919709214959"
          className="text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          +91 970 921 4959
        </a>
      </div>

      {/* Location */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <MapPin className="h-5 w-5 text-accent" />
          </div>
          <h3 className="font-semibold">Location</h3>
        </div>
        <p className="text-sm text-muted-foreground">Vellore, Tamil Nadu, India</p>
      </div>

      {/* Social Links */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <h3 className="font-semibold">Connect</h3>
        </div>
        <div className="space-y-2 text-sm">
          <Link
            href="https://github.com/krrish-anand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <GitBranch className="h-4 w-4 shrink-0" />
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/krrishanand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Briefcase className="h-4 w-4 shrink-0" />
            LinkedIn
          </Link>

        </div>
      </div>
    </div>
  );
}
