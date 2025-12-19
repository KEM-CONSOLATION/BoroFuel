'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import AppStoreBadges from '@/components/AppStoreBadges';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

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
            <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl">
              Have questions? We&apos;re here to help. Contact Borofuel, your trusted fuel service
              provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact Information</h2>
              <p className="mb-8 text-gray-600">
                For transport companies interested in partnering with our fuel service, or for
                existing partners needing support, please reach out through the form or contact
                details below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-primary-100 p-3">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@borofuel.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-primary-100 p-3">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+2349164245071" className="hover:text-primary-600">
                        09164245071
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+2348120782708" className="hover:text-primary-600">
                        08120782708
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-lg bg-primary-100 p-3">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">Port Harcourt, Nigeria</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="rounded-xl bg-gray-50 p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="organization"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Organization (if applicable)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>

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
