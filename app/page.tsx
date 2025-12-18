'use client';

import { motion } from 'framer-motion';
import { Fuel, Shield, Users, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SmartDownloadButton from '@/components/SmartDownloadButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Seamless Fuel Access for Transport Associations
              </h1>
              <p className="mb-8 text-lg text-gray-600 sm:text-xl">
                Connect approved drivers with designated filling stations. Simple, secure, and
                streamlined.
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-3 text-sm text-gray-600 sm:text-base">
                    Download our mobile app to get started
                  </p>
                  <SmartDownloadButton size="md" />
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-6 py-3 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 sm:px-8 sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-80 md:h-96 lg:h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Fuel station"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
              A simple, secure system designed for transport associations and their registered
              drivers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Verified Drivers',
                description:
                  'Only registered drivers from partner transport associations can access the system.',
              },
              {
                icon: Shield,
                title: 'Secure Verification',
                description:
                  'Organization ID verification ensures only authorized personnel can use the service.',
              },
              {
                icon: MapPin,
                title: 'Partner Stations',
                description:
                  'Access fuel at any approved partner filling station with seamless authentication.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-lg sm:p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 overflow-hidden rounded-lg shadow-xl sm:h-80 md:h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Transport vehicle"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                Streamlined Operations
              </h2>
              <p className="mb-8 text-base text-gray-600 sm:text-lg">
                Our platform simplifies fuel access for transport associations, making it easy for
                drivers to get what they need when they need it.
              </p>
              <ul className="space-y-4">
                {[
                  'No cash transactions required',
                  'Settlement through association processes',
                  'Secure organization verification',
                  'Access at approved partner stations',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-dark-500 to-dark-700 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Fuel className="mx-auto mb-6 h-16 w-16 text-white" />
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-base text-gray-200 sm:text-lg lg:text-xl">
              If you&apos;re a registered driver from a partner transport association, download the
              app to get started.
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-gray-200 sm:text-base">Download our mobile app</p>
              <SmartDownloadButton size="lg" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
