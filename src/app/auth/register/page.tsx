import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import RegisterWrapper from '../../../components/RegisterWrapper';

export const metadata: Metadata = {
  title: 'Register - Project Prometheus',
};

export default function Register(): ReactElement {
  return <RegisterWrapper />;
}
