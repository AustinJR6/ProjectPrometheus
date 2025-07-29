import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'About - Project Prometheus',
  description: 'Learn about the mission of Project Prometheus.'
};

export default function About(): ReactElement {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">About Project Prometheus</h1>
      <p>Founded by organizer Elias Rittenhouse, Project Prometheus began as a single campaign and has grown into a platform for independent candidates nationwide.</p>
      <p>Our goal is to light the way toward a transparent, just democracy by providing open tools and resources for campaigns rooted in community values.</p>
    </div>
  );
}