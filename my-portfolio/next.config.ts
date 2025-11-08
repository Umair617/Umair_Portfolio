/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next.js to generate static files
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
