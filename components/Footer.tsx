import Link from 'next/link';
import Image from 'next/image';
import SmartDownloadButton from '@/components/SmartDownloadButton';

export default function Footer() {
  return (
    <footer className="bg-dark-500 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Borofuel Logo"
                width={28}
                height={28}
                className="h-7 w-7 flex-shrink-0 object-contain"
                unoptimized
              />
              <span className="text-xl font-semibold text-white">Borofuel</span>
            </div>
            <p className="text-sm leading-relaxed">
              Connecting approved drivers with designated filling stations for seamless fuel
              collection.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-primary-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-primary-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Download App</h3>
            <p className="mb-4 text-sm">
              Get the Borofuel app on your mobile device for easy access on the go.
            </p>
            <SmartDownloadButton size="sm" showBadges={true} />
          </div>
        </div>

        <div className="mt-8 border-t border-dark-600 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm sm:text-left">
              &copy; {new Date().getFullYear()} Borofuel. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/terms" className="transition-colors hover:text-primary-500">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/privacy" className="transition-colors hover:text-primary-500">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
