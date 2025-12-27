import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
const logoUrl = `${siteUrl}/logo.jpg`;

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Borofuel - a service provider that provides fuel access to registered drivers from transport companies. Discover how we connect approved drivers with designated filling stations for seamless fuel collection.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteUrl}/about`,
    siteName: 'Borofuel',
    title: 'About Borofuel - Fuel Service Provider',
    description:
      'Learn about Borofuel - a fuel access platform designed for transport companies and their registered drivers. Discover our mission and how we simplify fuel management.',
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
    title: 'About Borofuel - Fuel Service Provider',
    description:
      'Learn about Borofuel - a fuel access platform designed for transport companies and their registered drivers.',
    images: [logoUrl],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
