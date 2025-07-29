import type { Metadata } from 'next'
import type { ReactElement } from 'react'

export const metadata: Metadata = {
  title: 'Media Kit - Project Prometheus',
  description: 'Official campaign logos and materials for press use.'
}

export default function MediaKit(): ReactElement {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Media Kit</h1>
      <p>Download official campaign materials.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a href="/media/Elias2026.pdf" className="text-fireorange underline">Campaign Overview PDF</a>
        </li>
        <li>
          <a href="/media/portrait.jpg" className="text-fireorange underline">Candidate Portrait</a>
        </li>
      </ul>
    </div>
  );
}
