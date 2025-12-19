'use client';

import { motion } from 'framer-motion';
import { Fuel, Shield, LogIn } from 'lucide-react';
import { useState } from 'react';
import AppStoreBadges from '@/components/AppStoreBadges';

export default function Drivers() {
  const [orgId, setOrgId] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would verify against a backend
    if (orgId.trim()) {
      setIsVerified(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Fuel className="mx-auto mb-6 h-16 w-16 text-primary-600" />
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Driver Portal
          </h1>
          <p className="text-lg text-gray-600 sm:text-xl">
            Access your account with your Organization ID
          </p>
        </motion.div>

        {!isVerified ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg sm:p-8"
          >
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-primary-100 p-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h2 className="mb-4 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              Organization Verification
            </h2>
            <p className="mb-6 text-center text-gray-600">
              Please enter your Organization ID Number to continue. This ID is provided by your
              transport company.
            </p>
            <form onSubmit={handleVerification}>
              <div className="mb-6">
                <label htmlFor="orgId" className="mb-2 block text-sm font-medium text-gray-700">
                  Organization ID Number
                </label>
                <input
                  type="text"
                  id="orgId"
                  required
                  value={orgId}
                  onChange={(e) => setOrgId(e.target.value)}
                  placeholder="Enter your Organization ID"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Verify & Continue
                <LogIn className="ml-2 h-5 w-5" />
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-500">
              Don&apos;t have an Organization ID? Contact your transport company.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-md rounded-xl bg-white p-8 text-center shadow-lg"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 p-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Verification Successful</h2>
            <p className="mb-6 text-gray-600">
              Your Organization ID has been verified. You can now access the driver portal features.
            </p>
            <button
              onClick={() => {
                setIsVerified(false);
                setOrgId('');
              }}
              className="font-semibold text-primary-600 hover:text-primary-700"
            >
              Sign Out
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-12 max-w-md rounded-xl bg-primary-50 p-6"
        >
          <h3 className="mb-3 font-semibold text-gray-900">Security Notice</h3>
          <p className="text-sm text-gray-600">
            Your Organization ID is verified against our secure database. Borofuel provides fuel
            access to registered drivers from partner transport companies. Periodic re-verification
            may be required for security purposes.
          </p>
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
    </div>
  );
}
