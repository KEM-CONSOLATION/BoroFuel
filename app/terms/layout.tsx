import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
const logoUrl = `${siteUrl}/logo.jpg`;

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/terms`,
    siteName: 'Borofuel',
    title: 'Terms and Conditions - Borofuel',
    description:
      'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
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
    title: 'Terms and Conditions - Borofuel',
    description:
      'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
    images: [logoUrl],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
