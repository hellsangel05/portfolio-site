import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://portfolio-site-green-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angel Gonzalez — Applied AI Developer",
    template: "%s — Angel Gonzalez",
  },
  description:
    "Angel Gonzalez is an applied AI developer in Los Angeles who builds LLM pipelines, computer-vision features, and full-stack AI products.",
  keywords: [
    "Angel Gonzalez", "applied AI developer", "AI engineer", "LLM applications",
    "AI implementation", "computer vision", "full-stack developer", "Next.js",
    "TypeScript", "Python", "Supabase", "voice AI", "AI automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Angel Gonzalez",
    title: "Angel Gonzalez — Applied AI Developer",
    description: "Applied-AI products, LLM pipelines, computer vision, and AI automation by Angel Gonzalez.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Angel Gonzalez — Applied AI Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Gonzalez — Applied AI Developer",
    description: "Applied-AI products, LLM pipelines, computer vision, and AI automation by Angel Gonzalez.",
    images: ["/opengraph-image"],
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
  jobTitle: "Web Developer | AI & Automation",
  email: "gonzalezangel0510@yahoo.com",
  address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA" },
  sameAs: ["https://github.com/hellsangel05"],
  worksFor: [
    { "@type": "Organization", name: "ADGO Ventures" },
    { "@type": "Organization", name: "ADGO Studios", url: "https://adgostudios.com/" },
  ],
  knowsAbout: [
    "AI application development",
    "LLM pipelines",
    "Computer vision",
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
            <Link href="/#work">Projects</Link>
            <Link href="/ai-automation" className="nav-optional">AI &amp; Automation</Link>
            <Link href="/creative-ai" className="nav-optional">Creative AI</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <span>© 2026 Angel Gonzalez</span>
          <span>Applied AI and full-stack development.</span>
          <a href="#main-content">Back to top</a>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
