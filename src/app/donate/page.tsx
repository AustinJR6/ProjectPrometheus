import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Donate - Project Prometheus',
  description: 'Support the campaign once FEC registration is complete.'
};

export default function Donate(): ReactElement {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Donate</h1>
      <p className="mb-4">Every dollar you give fuels the flame. Transparent donation ledger coming soon.</p>
      <p className="italic">Payment processing will be added later.</p>
    </div>
  );
}