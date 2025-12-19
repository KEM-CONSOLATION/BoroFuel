import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driver Portal',
  description:
    'Access your Borofuel driver portal with your Organization ID. Borofuel provides fuel access to verified drivers from partner transport companies at approved filling stations.',
  openGraph: {
    title: 'Driver Portal - Borofuel',
    description:
      'Access your Borofuel driver portal with your Organization ID. Borofuel provides fuel access to verified drivers from partner transport companies at approved filling stations.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Borofuel Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Driver Portal - Borofuel',
    description:
      'Access your Borofuel driver portal with your Organization ID. Borofuel provides fuel access to verified drivers from partner transport companies at approved filling stations.',
    images: ['/logo.jpg'],
  },
};

export default function DriversLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
