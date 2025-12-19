import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://borofuel.com'),
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
  ],
  authors: [{ name: 'Borofuel' }],
  creator: 'Borofuel',
  publisher: 'Borofuel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Borofuel',
    title: 'Borofuel - Fuel Service Provider for Drivers',
    description:
      'Connecting approved drivers with designated filling stations for seamless fuel collection.',
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
    title: 'Borofuel - Fuel Service Provider for Drivers',
    description:
      'Connecting approved drivers with designated filling stations for seamless fuel collection.',
    images: ['/logo.jpg'],
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
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
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
