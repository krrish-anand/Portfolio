import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me. I'm always interested in discussing new opportunities and ideas.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          I'm always interested in hearing about new opportunities, collaborations, and interesting
          problems. Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
