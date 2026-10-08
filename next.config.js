/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.DOCKER_BUILD ? { output: "standalone" } : {}),
  compress: true,
  swcMinify: true,
  poweredByHeader: false, // Prevents X-Powered-By: Next.js technology fingerprint disclosure
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
