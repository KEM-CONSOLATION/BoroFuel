import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.org';
const logoUrl = `${siteUrl}/logo.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Borofuel - Fuel Service Provider for Drivers',
    template: '%s | Borofuel',
  },
  description:
    'Borofuel is a service provider that provides fuel access to registered drivers. Connecting approved drivers with designated filling stations for seamless fuel collection.',
  keywords: [
    'fuel access',
    'transport companies',
    'fuel management',
    'driver verification',
    'filling stations',
    'fuel collection',
    'transport logistics',
    'fuel service provider',
    'driver fuel access',
    'transport fuel management',
    'fuel app',
    'driver verification system',
  ],
  authors: [{ name: 'Borofuel', url: siteUrl }],
  creator: 'Borofuel',
  publisher: 'Borofuel',
  applicationName: 'Borofuel',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Borofuel',
    title: 'Borofuel - Fuel Service Provider for Drivers',
    description:
      'Connecting approved drivers with designated filling stations for seamless fuel collection. Download our mobile app to get started.',
    images: [
      {
        url: logoUrl,
        width: 1024,
        height: 1024,
        alt: 'Borofuel Logo - Fuel Service Provider',
        type: 'image/jpeg',
      },
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: 'Borofuel - Fuel Service Provider for Drivers',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borofuel - Fuel Service Provider for Drivers',
    description:
      'Connecting approved drivers with designated filling stations for seamless fuel collection. Download our mobile app to get started.',
    images: [logoUrl],
    creator: '@borofuel',
    site: '@borofuel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.jpg', sizes: 'any' },
      { url: '/logo.jpg', type: 'image/jpeg' },
    ],
    apple: [{ url: '/logo.jpg', sizes: '1024x1024' }],
    shortcut: '/logo.jpg',
  },
  manifest: '/manifest.json',
  category: 'technology',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#f97316',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
