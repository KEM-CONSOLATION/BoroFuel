'use client';

import { motion } from 'framer-motion';
import { Fuel, Target, Users, Shield } from 'lucide-react';
import Image from 'next/image';
import AppStoreBadges from '@/components/AppStoreBadges';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Fuel className="mx-auto mb-6 h-16 w-16 text-primary-600" />
            <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              About Borofuel
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              Connecting transport associations with designated filling stations for seamless fuel
              access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg mb-16 max-w-none"
          >
            <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Our Mission</h2>
            <p className="mb-6 text-gray-700">
              Borofuel is a fuel access and station-partner app designed to streamline the
              relationship between transport associations and their registered drivers. We provide a
              secure, efficient platform that connects approved drivers with designated filling
              stations for seamless fuel collection.
            </p>
            <p className="mb-6 text-gray-700">
              The app is specifically designed for transport associations and their registered
              drivers. When drivers visit any approved partner filling station, they can
              authenticate their membership and receive fuel according to the association&apos;s
              existing arrangements with the station.
            </p>
            <p className="text-gray-700">
              Our system ensures that no cash transactions occur and no personal lending activity
              takes place. Drivers simply settle their fuel usage through their association&apos;s
              normal operational process, as managed internally by the association.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16 h-96 overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="Fuel station"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Our Purpose',
                description:
                  'To simplify fuel access for transport associations while maintaining security and accountability.',
              },
              {
                icon: Users,
                title: 'Who We Serve',
                description:
                  'Transport associations and their registered, verified drivers across partner networks.',
              },
              {
                icon: Shield,
                title: 'Security First',
                description:
                  'Organization ID verification ensures only authorized personnel can access the system.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-gray-50 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <item.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-primary-50 p-8"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">How It Works</h2>
            <ol className="list-inside list-decimal space-y-3 text-gray-700">
              <li>
                Transport associations register with Borofuel and provide their approved driver
                list.
              </li>
              <li>Drivers receive their Organization ID Number from their association.</li>
              <li>
                Drivers visit any approved partner filling station and authenticate using their
                Organization ID.
              </li>
              <li>
                Fuel is provided according to the association&apos;s arrangements with the station.
              </li>
              <li>
                Settlement is handled through the association&apos;s normal operational process.
              </li>
            </ol>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <h3 className="mb-4 text-xl font-bold text-gray-900">Get the App</h3>
            <p className="mb-6 text-gray-600">Download Borofuel on your mobile device</p>
            <div className="flex justify-center">
              <AppStoreBadges size="md" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
