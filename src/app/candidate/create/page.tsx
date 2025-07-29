import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import CandidateCreateWrapper from '../../../components/CandidateCreateWrapper';

export const metadata: Metadata = {
  title: 'Launch Campaign - Project Prometheus',
};

export default function CandidateCreate(): ReactElement {
  return <CandidateCreateWrapper />;
}
