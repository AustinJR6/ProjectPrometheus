import candidates from '../../candidates.json';
import CandidateCard from '../../components/CandidateCard';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Campaigns - Project Prometheus',
};

export default function Campaigns(): ReactElement {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Live Campaigns</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {candidates.map((c) => (
          <CandidateCard key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
}
