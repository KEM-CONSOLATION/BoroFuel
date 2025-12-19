import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Borofuel. For transport companies interested in partnering with our fuel service, or for existing partners needing support, contact us today.',
  openGraph: {
    title: 'Contact Borofuel',
    description:
      'Get in touch with Borofuel. For transport companies interested in partnering with us, or for existing partners needing support.',
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
    title: 'Contact Borofuel',
    description:
      'Get in touch with Borofuel. For transport companies interested in partnering with us, or for existing partners needing support.',
    images: ['/logo.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
