import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
  openGraph: {
    title: 'Terms and Conditions - Borofuel',
    description:
      'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
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
    title: 'Terms and Conditions - Borofuel',
    description:
      'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
    images: ['/logo.jpg'],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
