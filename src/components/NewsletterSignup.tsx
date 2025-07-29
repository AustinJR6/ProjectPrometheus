'use client'
import { useState } from 'react';
import type { ReactElement } from 'react';

export default function NewsletterSignup(): ReactElement {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setSubmitted(true);
  }

  if (submitted) {
    return <p className="text-center">Thank you for signing up!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-4">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="bg-fireorange text-softwhite px-4 py-2 rounded">
        Sign Up
      </button>
    </form>
  );
}
