import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  title: {
    default: "Krrish Anand - Data Scientist & ML Engineer",
    template: "%s | Krrish Anand",
  },
  description:
    "Portfolio of Krrish Anand - Data Scientist and Machine Learning Engineer. Exploring AI/ML solutions for real-world problems.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "AI",
    "Python",
    "Deep Learning",
    "NLP",
  ],
  authors: [
    {
      name: "Krrish Anand",
      url: "https://krrishanand.com",
    },
  ],
  creator: "Krrish Anand",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krrishanand.com",
    title: "Krrish Anand - Data Scientist & ML Engineer",
    description:
      "Portfolio of Krrish Anand - Data Scientist and Machine Learning Engineer",
    siteName: "Krrish Anand",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krrish Anand - Data Scientist & ML Engineer",
    description:
      "Portfolio of Krrish Anand - Data Scientist and Machine Learning Engineer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-background font-sans text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
