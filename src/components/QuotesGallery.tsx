'use client'
import { useState } from 'react'
import type { ReactElement } from 'react'

const cards = [
  { name: 'Ignite', file: '/quotes/ignite.svg' },
]

export default function QuotesGallery(): ReactElement {
  const [copied, setCopied] = useState<string | null>(null)

  function copy(url: string) {
    navigator.clipboard.writeText(window.location.origin + url)
    setCopied(url)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Shareable Quotes</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div key={card.name} className="border p-4 rounded text-center">
            <img src={card.file} alt={card.name} className="mx-auto mb-2" />
            <div className="space-x-2">
              <a href={card.file} download className="underline text-fireorange">Download</a>
              <button onClick={() => copy(card.file)} className="underline text-fireorange">
                {copied === card.file ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
