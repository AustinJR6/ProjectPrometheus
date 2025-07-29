import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import LoginWrapper from '../../../components/LoginWrapper';

export const metadata: Metadata = {
  title: 'Login - Project Prometheus',
};

export default function Login(): ReactElement {
  return <LoginWrapper />;
}
