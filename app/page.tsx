'use client';

import { motion } from 'framer-motion';
import { Fuel, Shield, Users, MapPin, CheckCircle, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SmartDownloadButton from '@/components/SmartDownloadButton';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-24 lg:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-primary-200/30 blur-3xl" />
          <div className="absolute -right-4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-secondary-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-dark-200/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm"
              >
                <Zap className="h-4 w-4" />
                <span>Revolutionizing Fuel Access</span>
              </motion.div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="gradient-text">Seamless Fuel Access</span>
                <br />
                <span className="text-gray-800">for Drivers</span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Borofuel is a service provider that provides fuel access to registered drivers.
                Experience a{' '}
                <span className="font-semibold text-primary-600">
                  simple, secure, and streamlined
                </span>{' '}
                fuel management system.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="mb-3 text-sm font-medium text-gray-700 sm:text-base">
                    🚀 Download our mobile app to get started
                  </p>
                  <SmartDownloadButton size="md" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all hover:gap-3 sm:text-base"
                >
                  Learn More
                  <TrendingUp className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative flex items-center justify-center">
                {/* Main phone mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative z-10"
                >
                  <Image
                    src="/assets/apple 5.jpg"
                    alt="Create Account - Borofuel App"
                    width={300}
                    height={600}
                    className="h-auto w-[280px] rounded-[2.5rem] shadow-2xl sm:w-[320px]"
                    priority
                  />
                </motion.div>
                {/* Floating phone mockups */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -left-8 top-12 z-0 hidden lg:block"
                >
                  <Image
                    src="/assets/apple 4.jpg"
                    alt="Get Fuel - Borofuel App"
                    width={200}
                    height={400}
                    className="h-auto w-[180px] rounded-[2rem] opacity-80 shadow-xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute -right-8 bottom-12 z-0 hidden lg:block"
                >
                  <Image
                    src="/assets/apple 6.jpg"
                    alt="Fuel Settlements - Borofuel App"
                    width={200}
                    height={400}
                    className="h-auto w-[180px] rounded-[2rem] opacity-80 shadow-xl"
                  />
                </motion.div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 text-sm font-semibold text-primary-700"
            >
              How It Works
            </motion.div>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              <span className="gradient-text-blue">Simple</span> & Powerful
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              A secure system designed for registered and verified drivers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Verified Drivers',
                description: 'Only registered and verified drivers can have access to the system.',
                gradient: 'from-blue-500 to-blue-600',
                bgGradient: 'from-blue-50 to-blue-100',
              },
              {
                icon: Shield,
                title: 'Secure Verification',
                description: 'ID verification ensures only authorised persons can use the service.',
                gradient: 'from-primary-500 to-primary-600',
                bgGradient: 'from-orange-50 to-orange-100',
              },
              {
                icon: MapPin,
                title: 'Partner Stations',
                description:
                  'Access fuel at any approved partner filling station with seamless authentication.',
                gradient: 'from-secondary-500 to-secondary-600',
                bgGradient: 'from-green-50 to-green-100',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="hover-lift group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              App Preview
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Experience the <span className="gradient-text">Borofuel App</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              See how easy it is to access fuel with our intuitive mobile application
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            {[
              {
                src: '/assets/apple 5.jpg',
                alt: 'Create Account - Borofuel App',
                title: 'Create Account',
              },
              { src: '/assets/apple 4.jpg', alt: 'Get Fuel - Borofuel App', title: 'Get Fuel' },
              {
                src: '/assets/apple 6.jpg',
                alt: 'Fuel Settlements - Borofuel App',
                title: 'Fuel Settlements',
              },
              {
                src: '/assets/apple 3 edit.jpg',
                alt: 'Track Settlement - Borofuel App',
                title: 'Track Settlement',
              },
            ].map((mockup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    width={300}
                    height={600}
                    className="h-auto w-full rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-500/90 via-dark-500/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{mockup.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src="/assets/apple 3 edit.jpg"
                  alt="Track Settlement - Borofuel App"
                  width={300}
                  height={600}
                  className="h-auto w-[280px] rounded-[2.5rem] shadow-2xl sm:w-[320px]"
                />
              </div>
              {/* Decorative floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="glass absolute -right-6 top-1/4 z-20 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">100% Secure</p>
                    <p className="text-xs text-gray-600">Verified Access</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 text-sm font-semibold text-primary-700">
                Why Choose Us
              </div>
              <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                <span className="gradient-text">Streamlined</span> Operations
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Our platform simplifies fuel access for drivers, making it easy to get what they and
                when they need it.
              </p>
              <ul className="space-y-5">
                {[
                  { text: 'No cash transactions required', icon: '💳' },
                  { text: 'Settlement through company processes', icon: '🔄' },
                  { text: 'Secure organization verification', icon: '🔒' },
                  { text: 'Access at approved partner stations', icon: '⛽' },
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-medium text-gray-800">{benefit.text}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-600 via-dark-500 to-primary-600 py-24">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-96 w-96 animate-pulse rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-secondary-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <Fuel className="h-10 w-10 text-white" />
            </motion.div>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-100 sm:text-xl">
              If you&apos;re a registered driver from a partner transport company,{' '}
              <span className="font-semibold">download the app</span> to get started today.
            </p>

            <div className="flex flex-col items-center gap-6">
              <p className="text-base font-medium text-gray-200 sm:text-lg">
                📱 Download our mobile app
              </p>
              <SmartDownloadButton size="lg" />
            </div>

            {/* Stats or trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              {[
                { label: 'Active Drivers', value: '1000+' },
                { label: 'Partner Stations', value: '50+' },
                { label: 'Transactions', value: '10K+' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300 sm:text-base">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
