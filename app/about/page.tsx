'use client';

import { motion } from 'framer-motion';
import { Fuel, Target, Users, Shield, Sparkles } from 'lucide-react';
import Image from 'next/image';
import AppStoreBadges from '@/components/AppStoreBadges';

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20 lg:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-primary-200/30 blur-3xl" />
          <div className="absolute -right-4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-secondary-200/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-xl"
            >
              <Fuel className="h-10 w-10 text-white" />
            </motion.div>
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              About <span className="gradient-text">Borofuel</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
              Connecting transport associations with designated filling stations for seamless fuel
              access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              Our Mission
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Revolutionizing <span className="gradient-text-blue">Fuel Access</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Borofuel is a fuel access and station-partner app designed to streamline the
                relationship between transport associations and their registered drivers. We provide
                a secure, efficient platform that connects approved drivers with designated filling
                stations for seamless fuel collection.
              </p>
              <p>
                The app is specifically designed for transport associations and their registered
                drivers. When drivers visit any approved partner filling station, they can
                authenticate their membership and receive fuel according to the association&apos;s
                existing arrangements with the station.
              </p>
              <p className="rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50 p-6 font-medium text-gray-800">
                <Sparkles className="mb-2 inline h-5 w-5 text-primary-600" /> Our system ensures
                that no cash transactions occur and no personal lending activity takes place.
                Drivers simply settle their fuel usage through their association&apos;s normal
                operational process, as managed internally by the association.
              </p>
            </div>
          </motion.div>

          {/* App Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src={mockup.src}
                      alt={mockup.alt}
                      width={300}
                      height={600}
                      className="h-auto w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-500/90 via-dark-500/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-xs font-bold text-white sm:text-sm">{mockup.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Our Purpose',
                description:
                  'To simplify fuel access for transport associations while maintaining security and accountability.',
                gradient: 'from-primary-500 to-primary-600',
                bgGradient: 'from-orange-50 to-orange-100',
              },
              {
                icon: Users,
                title: 'Who We Serve',
                description:
                  'Transport associations and their registered, verified drivers across partner networks.',
                gradient: 'from-blue-500 to-blue-600',
                bgGradient: 'from-blue-50 to-blue-100',
              },
              {
                icon: Shield,
                title: 'Security First',
                description:
                  'Organization ID verification ensures only authorized personnel can access the system.',
                gradient: 'from-secondary-500 to-secondary-600',
                bgGradient: 'from-green-50 to-green-100',
              },
            ].map((item, index) => (
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
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                  >
                    <item.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-8 shadow-lg lg:p-12"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary-200/30 blur-3xl" />
            <div className="relative">
              <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                How It <span className="gradient-text">Works</span>
              </h2>
              <ol className="space-y-5 text-lg text-gray-700">
                {[
                  'Transport associations register with Borofuel and provide their approved driver list.',
                  'Drivers receive their Organization ID Number from their association.',
                  'Drivers visit any approved partner filling station and authenticate using their Organization ID.',
                  "Fuel is provided according to the association's arrangements with the station.",
                  "Settlement is handled through the association's normal operational process.",
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-lg font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                    <span className="pt-1.5">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 text-sm font-semibold text-primary-700">
              Get Started Today
            </div>
            <h3 className="mb-4 text-3xl font-extrabold text-gray-900">
              Download the <span className="gradient-text">App</span>
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Available on iOS and Android - Start your journey with Borofuel
            </p>
            <div className="flex justify-center">
              <AppStoreBadges size="md" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
