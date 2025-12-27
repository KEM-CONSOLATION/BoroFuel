import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
const logoUrl = `${siteUrl}/logo.jpg`;

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Borofuel Privacy Policy. Learn how we collect, use, and protect your data when using the Borofuel fuel access service.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/privacy`,
    siteName: 'Borofuel',
    title: 'Privacy Policy - Borofuel',
    description:
      'Read the Borofuel Privacy Policy. Learn how we collect, use, and protect your data when using the Borofuel fuel access service.',
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
    title: 'Privacy Policy - Borofuel',
    description:
      'Read the Borofuel Privacy Policy. Learn how we collect, use, and protect your data when using the Borofuel fuel access service.',
    images: [logoUrl],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
