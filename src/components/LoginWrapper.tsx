'use client';
import dynamic from 'next/dynamic';
const LoginForm = dynamic(() => import('./LoginForm'));
export default function LoginWrapper() {
  return <LoginForm />;
}
