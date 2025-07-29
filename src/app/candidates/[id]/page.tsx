import candidates from '../../../candidates.json';
import CandidateProfile from '../../../components/CandidateProfile';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Candidate } from '../../../lib/candidates';

export const metadata: Metadata = {
  title: 'Candidate - Project Prometheus',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const candidate = (candidates as Candidate[]).find((c) => c.id === id);
  if (!candidate) notFound();
  return <CandidateProfile candidate={candidate} />;
}
