import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
const logoUrl = `${siteUrl}/logo.jpg`;

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Borofuel. For transport companies interested in partnering with our fuel service, or for existing partners needing support, contact us today.',
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/contact`,
    siteName: 'Borofuel',
    title: 'Contact Borofuel - Get in Touch',
    description:
      'Get in touch with Borofuel. For transport companies interested in partnering with us, or for existing partners needing support.',
    images: [
      {
        url: logoUrl,
        width: 1024,
        height: 1024,
        alt: 'Borofuel Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Borofuel - Get in Touch',
    description:
      'Get in touch with Borofuel. For transport companies interested in partnering with us, or for existing partners needing support.',
    images: [logoUrl],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
