'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Database, Eye, Clock, Mail } from 'lucide-react';
import Link from 'next/link';
import AppStoreBadges from '@/components/AppStoreBadges';

export default function Privacy() {
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
            <Shield className="mx-auto mb-6 h-16 w-16 text-primary-600" />
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Borofuel Policy Document
            </h1>
            <div className="flex flex-col items-center justify-center gap-2 text-base text-gray-600 sm:flex-row sm:gap-4 sm:text-lg">
              <span>Version: 1.1</span>
              <span>•</span>
              <span>Date: November 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-8 rounded-lg bg-primary-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">Introduction</h2>
              <p className="text-gray-700">
                Borofuel provides a fuel access service that allows verified drivers from transport
                associations to obtain fuel at approved partner stations quickly and securely. This
                policy explains how the system operates, how data is managed, and the rules guiding
                all users.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Database className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                1. Data Collection and Usage
              </h2>
              <p className="mb-4 text-gray-700">
                We collect the following types of data to provide and improve our service:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>
                  <strong>Personal Information:</strong> Full name, phone number, and verification
                  details (driver&apos;s license).
                </li>
                <li>
                  <strong>Vehicle Information:</strong> Plate number, type, model, and color.
                </li>
                <li>
                  <strong>Usage Data:</strong> Fuel usage logs and authorization records.
                </li>
                <li>
                  <strong>Activity Tracking:</strong> Activity tracking to ensure fair access and
                  proper system usage.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Lock className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                2. Security Measures
              </h2>
              <p className="mb-4 text-gray-700">
                We implement comprehensive security protocols to protect your data:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Data encryption for both transit and storage.</li>
                <li>Two-factor authentication for administrators.</li>
                <li>Duplicate account prevention (phone, license number, vehicle plate).</li>
                <li>Secure one-time authorization codes for fueling.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Eye className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                3. Operational Policies
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Every approved driver can request fuel at partner stations through the app.</li>
                <li>
                  Drivers access fuel according to their association&apos;s operational process.
                </li>
                <li>Each fuel request generates a one-time authorization code for security.</li>
                <li>Fueling must be confirmed by both the driver and station attendant.</li>
                <li>
                  Drivers are expected to settle their fuel usage as managed by the association.
                </li>
                <li>
                  Accounts may be temporarily restricted from fuel access in case of misuse or
                  unapproved activity.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Shield className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                4. Fraud Prevention
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Single-use authorization codes with automatic expiration.</li>
                <li>Account flagging for suspicious activity.</li>
                <li>Enforcement against duplicate registrations.</li>
                <li>Mandatory verification steps to confirm fueling.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Clock className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                5. Data Retention
              </h2>
              <p className="text-gray-700">
                All logs, fueling confirmations, and account activity are stored for at least 12
                months for auditing and compliance purposes.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8 rounded-lg bg-primary-50 p-6">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Mail className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                6. Contact
              </h2>
              <p className="mb-4 text-gray-700">
                For support or inquiries, drivers can contact Borofuel through the in-app help
                center or official customer support channels.
              </p>
              <Link href="/terms" className="text-primary-600 underline hover:text-primary-700">
                View Terms & Conditions
              </Link>
            </div>
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
