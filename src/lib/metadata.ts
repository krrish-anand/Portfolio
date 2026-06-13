import { Metadata } from "next";

const siteUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export function generateMetadata(
  title: string,
  description: string,
  ogImage?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Krrish Anand",
      images: [
        {
          url: ogImage || `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Krrish Anand",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage || `${siteUrl}/og-image.jpg`],
    },
  };
}

export function generateCanonicalUrl(path: string): string {
  return `${siteUrl}${path}`;
}
