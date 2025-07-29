'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import { createCandidate } from '../lib/candidates';

export default function CandidateCreateForm(): ReactElement {
  const [values, setValues] = useState<string>('');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await createCandidate({
        name: String(formData.get('name')), 
        location: String(formData.get('location')), 
        bio: String(formData.get('bio')), 
        photo: String(formData.get('photo')), 
        values: values.split(',').map((v) => v.trim()).filter(Boolean),
        donationUrl: String(formData.get('donationUrl')),
      });
      e.currentTarget.reset();
      setValues('');
      alert('Candidate submitted for review');
    } catch (err) {
      setError('Failed to create candidate');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-4">Create Campaign</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input name="name" required placeholder="Name" className="w-full p-2 border" />
      <input name="location" required placeholder="Location" className="w-full p-2 border" />
      <input name="photo" required placeholder="Photo URL" className="w-full p-2 border" />
      <textarea name="bio" required placeholder="Bio" className="w-full p-2 border" />
      <input name="values" value={values} onChange={(e) => setValues(e.target.value)} placeholder="Values comma separated" className="w-full p-2 border" />
      <input name="donationUrl" placeholder="Donation URL" className="w-full p-2 border" />
      <button type="submit" className="bg-fireorange text-softwhite px-4 py-2 rounded">Submit</button>
    </form>
  );
}
