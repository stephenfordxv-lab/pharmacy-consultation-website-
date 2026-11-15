/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the new app router
  experimental: { appDir: true },
  images: { remotePatterns: [] },
};
module.exports = nextConfig;
