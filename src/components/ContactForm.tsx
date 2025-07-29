'use client'
import { useState } from 'react'
import type { ReactElement } from 'react'

export default function ContactForm(): ReactElement {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    setSubmitted(true)
  }

  if (submitted) {
    return <p className="p-8 text-center">Message sent. Thank you!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <input name="name" required placeholder="Name" className="w-full p-2 border" />
      <input name="email" required type="email" placeholder="Email" className="w-full p-2 border" />
      <textarea name="message" required placeholder="Message" className="w-full p-2 border" />
      <button type="submit" className="bg-fireorange text-softwhite px-4 py-2 rounded">Send</button>
    </form>
  )
}
