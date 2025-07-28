import NewsletterSignup from '../components/NewsletterSignup';
import CampaignBadge from '../components/CampaignBadge';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center bg-[url('/globe.svg')] bg-cover bg-center space-y-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Project Prometheus: Elias 2026 — Ignite the Future</h1>
        <p className="max-w-xl mb-8">Join Elias Rittenhouse in lighting the way toward a just, transparent, and technology-empowered future.</p>
        <div className="space-x-4 mb-8">
          <a href="/platform" className="bg-fireorange text-softwhite px-6 py-3 rounded hover:bg-emberred transition">Explore the Platform</a>
          <a href="/donate" className="bg-softwhite text-charcoal px-6 py-3 rounded hover:bg-fireorange hover:text-softwhite transition">Donate</a>
        </div>
        <NewsletterSignup />
      </div>
      <CampaignBadge />
    </section>
  );
}
