import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Borofuel - a fuel access platform designed for transport associations and their registered drivers. Discover how we connect approved drivers with designated filling stations.',
  openGraph: {
    title: 'About Borofuel',
    description:
      'Learn about Borofuel - a fuel access platform designed for transport associations and their registered drivers.',
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
    title: 'About Borofuel',
    description:
      'Learn about Borofuel - a fuel access platform designed for transport associations and their registered drivers.',
    images: ['/logo.jpg'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
