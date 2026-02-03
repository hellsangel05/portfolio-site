import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Angel Gonzalez | Software Engineer",
  description: "Portfolio of Angel Gonzalez - Junior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-black shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6">
            <Link href="/" className="font-semibold hover:text-blue-600">Home</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}