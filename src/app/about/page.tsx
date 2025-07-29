import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'About - Project Prometheus',
  description: 'Learn about Elias Rittenhouse and the mission of Project Prometheus.'
};

export default function About(): ReactElement {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">About Elias</h1>
      <p>Elias Rittenhouse comes from humble, working-class roots. A father first, he believes in building a future worthy of our children.</p>
      <p>Project Prometheus is his mission to ignite change: to fight corruption, champion economic justice, and put technology back in the hands of the people.</p>
      <h2 className="text-2xl font-semibold mt-8">Why He&apos;s Running</h2>
      <p>From small-town challenges to national struggles, Elias has seen how ordinary people get left behind. He&apos;s running to light a new path forward.</p>
    </div>
  );
}