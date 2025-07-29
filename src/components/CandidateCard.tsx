import type { ReactElement } from 'react';
import Link from 'next/link';
import type { Candidate } from '../lib/candidates';

export default function CandidateCard({ candidate }: { candidate: Candidate }): ReactElement {
  return (
    <Link href={`/candidates/${candidate.id}`} className="block border p-4 rounded hover:shadow-md transition">
      <img src={candidate.photo} alt={candidate.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-2">{candidate.name}</h2>
      <p className="text-sm text-gray-500 mb-2">{candidate.location}</p>
      <p className="mb-2 line-clamp-3">{candidate.bio}</p>
      <div className="flex flex-wrap gap-1">
        {candidate.values.map((v) => (
          <span key={v} className="bg-charcoal text-softwhite text-xs px-2 py-1 rounded">{v}</span>
        ))}
      </div>
    </Link>
  );
}
