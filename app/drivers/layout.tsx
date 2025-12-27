import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
const logoUrl = `${siteUrl}/logo.jpg`;

export const metadata: Metadata = {
  title: 'Driver Portal',
  description:
    'Access your Borofuel driver portal with your Organization ID. Borofuel provides fuel access to verified drivers from partner transport companies at approved filling stations.',
  alternates: {
    canonical: `${siteUrl}/drivers`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/drivers`,
    siteName: 'Borofuel',
    title: 'Driver Portal - Borofuel',
    description:
      'Access your Borofuel driver portal with your Organization ID. Borofuel provides fuel access to verified drivers from partner transport companies at approved filling stations.',
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
    title: 'Driver Portal - Borofuel',
    description:
      'Access your Borofuel driver portal with your Organization ID. Borofuel provides fuel access to verified drivers from partner transport companies at approved filling stations.',
    images: [logoUrl],
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DriversLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
