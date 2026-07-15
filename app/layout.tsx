import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://portfolio-site-green-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angel Gonzalez — AI Product Builder",
    template: "%s — Angel Gonzalez",
  },
  description:
    "Angel Gonzalez is an AI product builder who turns ambitious ideas into functional, deployed applications across AI, media, community, and creative technology.",
  keywords: [
    "Angel Gonzalez",
    "AI product builder",
    "AI applications developer",
    "product-minded developer",
    "rapid prototyping",
    "full-stack developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Angel Gonzalez",
    title: "Angel Gonzalez — AI Product Builder",
    description: "Ambitious product ideas turned into functional, deployed applications.",
    images: [{ url: "/og-v2.png", width: 1662, height: 946, alt: "Angel Gonzalez — AI Product Builder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Gonzalez — AI Product Builder",
    description: "Ambitious product ideas turned into functional, deployed applications.",
    images: ["/og-v2.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Angel Gonzalez",
  url: siteUrl,
  jobTitle: "AI Product Builder",
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA" },
  sameAs: ["https://github.com/hellsangel05"],
  worksFor: [
    { "@type": "Organization", name: "ADGO Ventures" },
    { "@type": "Organization", name: "ADGO Studios", url: "https://adgostudios.com/" },
  ],
  knowsAbout: [
    "AI-assisted development",
    "Full-stack product development",
    "Rapid product prototyping",
    "Product strategy",
    "Workflow automation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <Link href="/" className="site-brand" aria-label="Angel Gonzalez home">
            <span>AG</span>
            <strong>Angel Gonzalez</strong>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#about" className="nav-optional">About</Link>
            <Link href="/#ventures" className="nav-optional">Ventures</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <span>© 2026 Angel Gonzalez</span>
          <span>Designed and built with AI-assisted workflows.</span>
          <a href="#main-content">Back to top ↑</a>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
