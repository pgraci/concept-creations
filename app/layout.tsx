import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://conceptcreations.studio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Concept Creations — Boutique Content & Storytelling Studio · Kingston, Jamaica",
    template: "%s · Concept Creations",
  },
  description:
    "Concept Creations is a boutique content and storytelling agency in Kingston, Jamaica. Premium high-end and UGC-style content for social, digital, film & television — plus full-service social media management for brands.",
  keywords: [
    "content agency Jamaica",
    "Kingston content studio",
    "UGC content Jamaica",
    "social media management Kingston",
    "video production Jamaica",
    "storytelling agency Caribbean",
    "Concept Creations",
  ],
  authors: [{ name: "Concept Creations" }],
  openGraph: {
    title: "Concept Creations — Boutique Content & Storytelling Studio",
    description:
      "Premium and UGC-style content, film & television production, and full-service social media management. Based in Kingston, Jamaica.",
    url: SITE_URL,
    siteName: "Concept Creations",
    locale: "en_JM",
    type: "website",
    images: [
      {
        url: "/brand/concept-creations-ogimage.png",
        width: 1200,
        height: 630,
        alt: "Concept Creations — boutique content & storytelling studio, Kingston, Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concept Creations — Content & Storytelling Studio, Kingston JA",
    description:
      "Premium and UGC-style content, film & television, and full-service social media management.",
    images: ["/brand/concept-creations-ogimage.png"],
  },
  manifest: "/brand/site.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/brand/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/brand/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-ink text-bone font-sans antialiased selection:bg-gold/30 selection:text-bone">
        {children}
      </body>
    </html>
  );
}
