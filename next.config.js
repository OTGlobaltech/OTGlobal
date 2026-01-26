/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'commondatastorage.googleapis.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
    ],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
