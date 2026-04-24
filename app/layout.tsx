import ChatBot from "./components/ChatBot";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Angel Gonzalez — Junior Developer & Automation",
  description: "Aspiring full-stack developer. AI-native builder. Co-founder at ADGo Studios.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              <span className="mark">A</span>
              <span>Angel Gonzalez</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/project-docs">Docs</Link>
              <Link href="/about">About</Link>
            </div>
            <div className="nav-meta">
              <span>Los Angeles · PT</span>
            </div>
          </div>
        </nav>
        {children}
        <footer className="site-footer">
          <span>© 2026 Angel Gonzalez</span>
          <span>Built with Claude Code + Next.js</span>
        </footer>
        <ChatBot />
      </body>
    </html>
  );
}
