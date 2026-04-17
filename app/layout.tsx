import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import ChatBot from "./components/ChatBot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angel Gonzalez | Automation and Junior Tech Portfolio",
  description:
    "Portfolio of Angel Gonzalez, a retail-to-tech career changer focused on automation, support-minded software, and practical web projects.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <div className="site-header-inner">
              <Link href="/" className="site-mark">
                Angel Gonzalez
              </Link>
              <nav className="site-nav" aria-label="Primary navigation">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="site-nav-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main className="site-main">{children}</main>
        </div>
        <ChatBot />
      </body>
    </html>
  );
}
