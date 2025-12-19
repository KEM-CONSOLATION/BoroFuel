'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import AppStoreBadges from '@/components/AppStoreBadges';

export default function Terms() {
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
            <FileText className="mx-auto mb-6 h-16 w-16 text-primary-600" />
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Borofuel - Terms and Conditions
            </h1>
            <p className="text-base text-gray-600 sm:text-lg">
              Version 1.1 — Effective November 2025
            </p>
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
            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                1. Acceptance of Agreement
              </h2>
              <p className="text-gray-700">
                By registering on the Borofuel mobile app and using the fuel access service, you
                agree to comply with all terms stated here. If you do not agree, do not use the
                service.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                2. Driver Eligibility
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Drivers must provide valid personal and vehicle information.</li>
                <li>Each driver is allowed only one account.</li>
                <li>Registration must be approved before accessing fuel at partner stations.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">3. Fuel Access</h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>
                  Approved drivers can request fuel at partner stations through the Borofuel app.
                </li>
                <li>Each request generates a one-time authorization code for fueling.</li>
                <li>The code must be verified and confirmed at the fueling station.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">4. Fuel Settlement</h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>
                  Fuel usage is settled according to the company&apos;s internal operational
                  process.
                </li>
                <li>
                  Drivers are expected to follow their company&apos;s procedures for fuel balance
                  management.
                </li>
                <li>
                  Accounts may be temporarily restricted from accessing fuel in case of misuse or
                  unapproved activity.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <Shield className="mr-2 h-5 w-5 text-primary-600 sm:h-6 sm:w-6" />
                5. Fueling Confirmation
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Both the driver and station attendant must confirm fueling.</li>
                <li>Only confirmed transactions are recorded in the system.</li>
                <li>Unconfirmed fueling attempts will not be recognized by the system.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 sm:text-2xl">
                <AlertTriangle className="mr-2 h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
                6. Fraud & Misconduct
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Duplicate accounts are strictly prohibited.</li>
                <li>Authorization codes may not be reused, shared, or manipulated.</li>
                <li>Any fraudulent behavior may lead to permanent account suspension.</li>
                <li>Legal action may be taken where necessary.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">7. System Rights</h2>
              <ul className="ml-6 list-disc space-y-2 text-gray-700">
                <li>Borofuel may update or modify platform features without notice.</li>
                <li>Borofuel may suspend any user who violates these terms.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                Borofuel is not responsible for fueling delays, station errors, network disruptions,
                or issues caused by third-party service providers.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-8 rounded-lg bg-primary-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                9. Contact Information
              </h2>
              <p className="mb-4 text-gray-700">
                For complaints or support, contact the official Borofuel help desk.
              </p>
              <Link href="/privacy" className="text-primary-600 underline hover:text-primary-700">
                View Privacy Policy
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
