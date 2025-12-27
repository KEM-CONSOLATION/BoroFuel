/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  // Disable trailing slash for cleaner URLs
  trailingSlash: false,
};

module.exports = nextConfig;
