import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Borofuel. For transport associations interested in partnering with us, or for existing partners needing support, contact us today.',
  openGraph: {
    title: 'Contact Borofuel',
    description:
      'Get in touch with Borofuel. For transport associations interested in partnering with us, or for existing partners needing support.',
    images: ['/logo.jpg'],
  },
  twitter: {
    title: 'Contact Borofuel',
    description:
      'Get in touch with Borofuel. For transport associations interested in partnering with us, or for existing partners needing support.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
