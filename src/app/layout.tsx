import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import type { ReactElement } from "react";
import ThemeToggle from "../components/ThemeToggle";
import "./global.css";

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
  title: "Project Prometheus",
  description: "A movement platform for independent campaigns.",
  openGraph: {
    title: "Project Prometheus",
    description: "A movement platform for independent campaigns.",
    url: "https://example.com",
    siteName: "Project Prometheus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Prometheus",
    description: "A movement platform for independent campaigns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en">
      <head>
        {/* Placeholder for Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'GA-ID'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID || 'GA-ID'}');`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <header className="bg-charcoal text-softwhite p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Project Prometheus</Link>
          <nav className="space-x-4 flex items-center">
            <a href="/campaigns" className="hover:text-fireorange">Campaigns</a>
            <a href="/candidate/create" className="hover:text-fireorange">Launch</a>
            <a href="/manifesto" className="hover:text-fireorange">Manifesto</a>
            <a href="/blog" className="hover:text-fireorange">Blog</a>
            <a href="/contact" className="hover:text-fireorange">Contact</a>
            <a href="/auth/login" className="hover:text-fireorange">Login</a>
            <ThemeToggle />
          </nav>
        </header>
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <footer className="bg-charcoal text-softwhite p-6 text-center space-y-2">
          <div className="space-x-4">
            <a href="/platform" className="hover:text-fireorange">Platform</a>
            <a href="/donate" className="hover:text-fireorange">Donate</a>
            <a href="/get-involved" className="hover:text-fireorange">Volunteer</a>
            <a href="/privacy" className="hover:text-fireorange">Privacy Policy</a>
          </div>
          <div className="space-x-4 mt-2">
            <a href="https://twitter.com" aria-label="Twitter" className="inline-block hover:text-fireorange">🐦</a>
            <a href="https://facebook.com" aria-label="Facebook" className="inline-block hover:text-fireorange">📘</a>
            <a href="https://instagram.com" aria-label="Instagram" className="inline-block hover:text-fireorange">📸</a>
          </div>
          <p className="text-sm">© 2026 Project Prometheus</p>
        </footer>
      </body>
    </html>
  );
}