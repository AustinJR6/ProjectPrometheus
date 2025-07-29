import candidates from '../candidates.json';
import CandidateCard from '../components/CandidateCard';
import NewsletterSignup from '../components/NewsletterSignup';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Project Prometheus',
  description: 'A movement platform for independent campaigns.',
};

export default function Home(): ReactElement {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-20 text-center bg-[url('/globe.svg')] bg-cover bg-center space-y-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Project Prometheus</h1>
          <p className="max-w-xl mb-8">Igniting grassroots campaigns with modern technology and transparent values.</p>
          <div className="space-x-4 mb-8">
            <a href="/campaigns" className="bg-fireorange text-softwhite px-6 py-3 rounded hover:bg-emberred transition">View Campaigns</a>
            <a href="/candidate/create" className="bg-softwhite text-charcoal px-6 py-3 rounded">Launch Campaign</a>
          </div>
          <NewsletterSignup />
        </div>
      </section>

      <section className="p-8 max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-4">Featured Campaigns</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {candidates.map((c) => (
            <CandidateCard key={c.id} candidate={c} />
          ))}
        </div>
      </section>
    </>
  );
}
