import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Borofuel Privacy Policy. Learn how we collect, use, and protect your data when using the Borofuel fuel access service.',
  openGraph: {
    title: 'Privacy Policy - Borofuel',
    description:
      'Read the Borofuel Privacy Policy. Learn how we collect, use, and protect your data when using the Borofuel fuel access service.',
    images: ['/logo.jpg'],
  },
  twitter: {
    title: 'Privacy Policy - Borofuel',
    description:
      'Read the Borofuel Privacy Policy. Learn how we collect, use, and protect your data when using the Borofuel fuel access service.',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
