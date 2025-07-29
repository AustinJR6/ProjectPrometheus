'use client';
import dynamic from 'next/dynamic';
const CandidateCreateForm = dynamic(() => import('./CandidateCreateForm'));
export default function CandidateCreateWrapper() {
  return <CandidateCreateForm />;
}
