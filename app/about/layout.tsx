import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Borofuel - a fuel access platform designed for transport associations and their registered drivers. Discover how we connect approved drivers with designated filling stations.',
  openGraph: {
    title: 'About Borofuel',
    description:
      'Learn about Borofuel - a fuel access platform designed for transport associations and their registered drivers.',
    images: ['/logo.jpg'],
  },
  twitter: {
    title: 'About Borofuel',
    description:
      'Learn about Borofuel - a fuel access platform designed for transport associations and their registered drivers.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
