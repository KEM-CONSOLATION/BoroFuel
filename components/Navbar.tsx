'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartDownloadButton from '@/components/SmartDownloadButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-white/80 shadow-sm backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-lg shadow-md transition-shadow group-hover:shadow-lg lg:h-10 lg:w-10">
              <Image
                src="/logo.jpg"
                alt="Borofuel Logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="bg-gradient-to-r from-primary-500 to-black bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              Borofuel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 lg:text-base"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <div className="ml-4 hidden lg:block">
              <SmartDownloadButton size="sm" className="shadow-md hover:shadow-lg" />
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-2 text-primary-700 transition-all hover:from-primary-100 hover:to-primary-200 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200/50 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {[
                { href: '/', label: 'Home', icon: '🏠' },
                { href: '/about', label: 'About', icon: 'ℹ️' },
                { href: '/contact', label: 'Contact', icon: '📧' },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-all hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-3"
                onClick={() => setIsOpen(false)}
              >
                <SmartDownloadButton size="sm" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
