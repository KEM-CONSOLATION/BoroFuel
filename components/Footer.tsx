import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';
import SmartDownloadButton from '@/components/SmartDownloadButton';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-dark-600 via-dark-500 to-dark-700 text-gray-300">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-secondary-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/logo.jpg"
                  alt="Borofuel Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <span className="text-2xl font-bold text-white">Borofuel</span>
            </div>
            <p className="mb-6 max-w-md text-base leading-relaxed text-gray-400">
              Borofuel is a service provider that provides fuel access to registered drivers.
              Connecting approved drivers with designated filling stations for seamless fuel
              collection.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                <span className="text-lg">⛽</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Trusted Platform</p>
                <p className="text-xs text-gray-400">Secure & Reliable</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/drivers', label: 'For Drivers' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition-all hover:text-primary-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary-500 transition-all group-hover:w-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Download */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <div className="mb-6 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                <div>
                  <a
                    href="tel:+2349164245071"
                    className="block text-gray-300 transition-colors hover:text-primary-400"
                  >
                    09164245071
                  </a>
                  <a
                    href="tel:+2348120782708"
                    className="block text-gray-300 transition-colors hover:text-primary-400"
                  >
                    08120782708
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-400" />
                <p className="text-gray-300">Port Harcourt, Nigeria</p>
              </div>
            </div>
            <h3 className="mb-4 text-lg font-bold text-white">Download App</h3>
            <p className="mb-4 text-sm text-gray-400">
              Get the Borofuel app on your mobile device for easy access on the go.
            </p>
            <SmartDownloadButton size="sm" showBadges={true} />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-gray-400 sm:text-left">
              © {new Date().getFullYear()} Borofuel. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link href="/terms" className="transition-colors hover:text-primary-400">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/privacy" className="transition-colors hover:text-primary-400">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
