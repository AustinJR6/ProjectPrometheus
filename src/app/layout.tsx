import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Project Prometheus: Elias 2026",
  description: "For my sons. For the people. For the flame.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <header className="bg-charcoal text-softwhite p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Project Prometheus</Link>
          <nav className="space-x-4">
            <a href="/about" className="hover:text-fireorange">About</a>
            <a href="/platform" className="hover:text-fireorange">Platform</a>
            <a href="/get-involved" className="hover:text-fireorange">Get Involved</a>
            <a href="/donate" className="hover:text-fireorange">Donate</a>
            <a href="/blog" className="hover:text-fireorange">Blog</a>
            <a href="/contact" className="hover:text-fireorange">Contact</a>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <footer className="bg-charcoal text-softwhite text-center p-4">
          © 2026 Elias Rittenhouse
        </footer>
      </body>
    </html>
  );
}