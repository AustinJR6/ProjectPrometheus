'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function RegisterForm(): ReactElement {
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      if (!auth) throw new Error('Auth not initialized');
      await createUserWithEmailAndPassword(auth, String(formData.get('email')), String(formData.get('password')));
      window.location.href = '/';
    } catch (err) {
      setError('Failed to register');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input name="email" type="email" required placeholder="Email" className="w-full p-2 border" />
      <input name="password" type="password" required placeholder="Password" className="w-full p-2 border" />
      <button type="submit" className="bg-fireorange text-softwhite px-4 py-2 rounded">Register</button>
    </form>
  );
}
