'use client';
import dynamic from 'next/dynamic';
const RegisterForm = dynamic(() => import('./RegisterForm'));
export default function RegisterWrapper() {
  return <RegisterForm />;
}
