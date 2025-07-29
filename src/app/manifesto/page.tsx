import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Manifesto - Project Prometheus',
};

export default function Manifesto(): ReactElement {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
      <p>Project Prometheus is a national movement to empower everyday people to launch independent political campaigns. We believe technology and transparency can fuel a new era of people-powered democracy.</p>
      <p>Together we build tools for candidates who reject corporate influence, center community values, and fight for justice from the local level up.</p>
    </div>
  );
}
