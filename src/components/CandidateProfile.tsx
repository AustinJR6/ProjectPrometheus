import type { ReactElement } from 'react';
import type { Candidate } from '../lib/candidates';

export default function CandidateProfile({ candidate }: { candidate: Candidate }): ReactElement {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{candidate.name}</h1>
      <p className="italic text-gray-500">{candidate.location}</p>
      <img src={candidate.photo} alt={candidate.name} className="w-full rounded" />
      <p>{candidate.bio}</p>
      <div className="flex flex-wrap gap-2">
        {candidate.values.map((v) => (
          <span key={v} className="bg-charcoal text-softwhite text-xs px-2 py-1 rounded">{v}</span>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Support this campaign</h2>
        <a href={candidate.donationUrl} className="bg-fireorange text-softwhite px-4 py-2 rounded" target="_blank" rel="noopener noreferrer">Donate</a>
      </div>
    </div>
  );
}
