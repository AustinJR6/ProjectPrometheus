import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface Candidate {
  id?: string;
  name: string;
  location: string;
  bio: string;
  photo: string;
  values: string[];
  donationUrl: string;
}

export async function createCandidate(candidate: Candidate): Promise<void> {
  // TODO: add server-side validation
  if (!db) throw new Error('Database not initialized');
  await addDoc(collection(db, 'candidates'), candidate);
}

export async function getCandidates(): Promise<Candidate[]> {
  if (!db) return [];
  const snapshot = await getDocs(collection(db, 'candidates'));
  return snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Candidate) }));
}
