import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://portfolio-site-green-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angel Gonzalez — Web Developer | AI & Automation",
    template: "%s — Angel Gonzalez",
  },
  description:
    "Angel Gonzalez builds software, websites, and AI-powered workflows in Los Angeles.",
  keywords: [
    "Angel Gonzalez",
    "web developer",
    "technical implementation",
    "IT support",
    "product engineer",
    "AI-enabled applications",
    "rapid prototyping",
    "full-stack developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Angel Gonzalez",
    title: "Angel Gonzalez — Web Developer | AI & Automation",
    description: "Web development, creative technology, AI workflows, and client work by Angel Gonzalez.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Angel Gonzalez — Web Developer | AI & Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Gonzalez — Web Developer | AI & Automation",
    description: "Websites, client work, creative platforms, and software projects by Angel Gonzalez.",
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
            <Link href="/#experience" className="nav-optional">Experience</Link>
            <Link href="/#about" className="nav-optional">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <span>© 2026 Angel Gonzalez</span>
          <span>Web development and practical technology.</span>
          <a href="#main-content">Back to top</a>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
