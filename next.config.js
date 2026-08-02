/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    cpus: 1,
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
