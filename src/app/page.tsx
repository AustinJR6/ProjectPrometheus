import NewsletterSignup from '../components/NewsletterSignup';
import CampaignBadge from '../components/CampaignBadge';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Project Prometheus: Elias 2026',
  description: 'For my sons. For the people. For the flame.',
  openGraph: {
    title: 'Project Prometheus: Elias 2026',
    description: 'For my sons. For the people. For the flame.',
    url: 'https://example.com',
    siteName: 'Project Prometheus',
  },
};

export default function Home(): ReactElement {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-20 text-center bg-[url('/globe.svg')] bg-cover bg-center space-y-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Project Prometheus: Elias 2026 — Ignite the Future</h1>
          <p className="max-w-xl mb-8">Join Elias Rittenhouse in lighting the way toward a just, transparent, and technology-empowered future.</p>
          <div className="space-x-4 mb-8">
            <a href="/platform" className="bg-fireorange text-softwhite px-6 py-3 rounded hover:bg-emberred transition">Explore the Platform</a>
            <button disabled title="Coming Soon after FEC registration" className="bg-softwhite text-charcoal px-6 py-3 rounded cursor-not-allowed opacity-70">Donate</button>
          </div>
          <NewsletterSignup />
        </div>
        <CampaignBadge />
      </section>

      <section className="p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <img src="https://via.placeholder.com/300x200" alt="Elias after a long day's work" className="w-full md:w-1/2 rounded" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Why I’m Running</h2>
          <blockquote className="italic mb-4">“Placeholder quote about perseverance and serving the community after a long day’s work.”</blockquote>
          <p>Placeholder text sharing Elias’s motivation for entering the race and his dedication to working people.</p>
        </div>
      </section>

      <section className="p-8 max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="text-2xl font-bold">Message from Elias</h2>
        <div className="relative pb-[56.25%] h-0">
          <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video message" allowFullScreen></iframe>
        </div>
      </section>
    </>
  );
}
