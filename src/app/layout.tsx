import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import type { ReactElement } from "react";
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
  title: "Project Prometheus: Elias 2026",
  description: "For my sons. For the people. For the flame.",
  openGraph: {
    title: "Project Prometheus: Elias 2026",
    description: "For my sons. For the people. For the flame.",
    url: "https://example.com",
    siteName: "Project Prometheus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Prometheus: Elias 2026",
    description: "For my sons. For the people. For the flame.",
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
          <nav className="space-x-4">
            <a href="/about" className="hover:text-fireorange">About</a>
            <a href="/platform" className="hover:text-fireorange">Platform</a>
            <a href="/get-involved" className="hover:text-fireorange">Get Involved</a>
            <a href="/donate" className="hover:text-fireorange">Donate</a>
            <a href="/blog" className="hover:text-fireorange">Blog</a>
            <a href="/media-kit" className="hover:text-fireorange">Media Kit</a>
            <a href="/quotes" className="hover:text-fireorange">Quotes</a>
            <a href="/contact" className="hover:text-fireorange">Contact</a>
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
          <p className="text-sm">© 2026 Elias Rittenhouse</p>
        </footer>
      </body>
    </html>
  );
}