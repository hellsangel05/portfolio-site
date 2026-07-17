import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://portfolio-site-green-xi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Angel Gonzalez — Product-Minded Full-Stack Developer",
    template: "%s — Angel Gonzalez",
  },
  description:
    "Angel Gonzalez builds AI-enabled web and mobile products from concept through deployment.",
  keywords: [
    "Angel Gonzalez",
    "product-minded full-stack developer",
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
    title: "Angel Gonzalez — Product-Minded Full-Stack Developer",
    description: "AI-enabled web and mobile products built from concept through deployment.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Angel Gonzalez — Product-Minded Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Gonzalez — Product-Minded Full-Stack Developer",
    description: "AI-enabled web and mobile products built from concept through deployment.",
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
  jobTitle: "Product-Minded Full-Stack Developer",
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
          <span>Product design and development.</span>
          <a href="#main-content">Back to top ↑</a>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </body>
    </html>
  );
}
