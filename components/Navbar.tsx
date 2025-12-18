'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartDownloadButton from '@/components/SmartDownloadButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Borofuel Logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-semibold text-gray-900 sm:text-xl">Borofuel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            <Link href="/" className="text-gray-700 transition-colors hover:text-primary-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 transition-colors hover:text-primary-600">
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 transition-colors hover:text-primary-600"
            >
              Contact
            </Link>
            <SmartDownloadButton size="sm" className="hidden lg:flex" />
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-md p-2 text-gray-700 hover:text-primary-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-white md:hidden"
          >
            <div className="space-y-2 px-4 pb-4 pt-2">
              <Link
                href="/"
                className="block py-2 text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 transition-colors hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2" onClick={() => setIsOpen(false)}>
                <SmartDownloadButton size="sm" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
