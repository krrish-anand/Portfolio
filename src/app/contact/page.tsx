import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me. I'm very much interested in discussing new opportunities and ideas.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          I'm very much interested in hearing about new opportunities and collaborations. Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
