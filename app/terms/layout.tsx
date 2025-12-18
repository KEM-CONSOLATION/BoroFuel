import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
  openGraph: {
    title: 'Terms and Conditions - Borofuel',
    description:
      'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
    images: ['/logo.jpg'],
  },
  twitter: {
    title: 'Terms and Conditions - Borofuel',
    description:
      'Read the Borofuel Terms and Conditions. Understand the rules, responsibilities, and guidelines for using the Borofuel fuel access service.',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
