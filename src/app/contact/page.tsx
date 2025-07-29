import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Project Prometheus',
  description: 'Reach out to Elias Rittenhouse and the campaign team.'
}

export default function Contact(): ReactElement {
  return <ContactForm />
}
