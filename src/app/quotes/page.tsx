import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import QuotesGallery from '../../components/QuotesGallery'

export const metadata: Metadata = {
  title: 'Quotes - Project Prometheus',
  description: 'Download and share quotes from Elias Rittenhouse.'
}

export default function Quotes(): ReactElement {
  return <QuotesGallery />
}
