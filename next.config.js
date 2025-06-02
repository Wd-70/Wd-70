/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Framer Motion ESM 호환성 설정
  experimental: {
    serverExternalPackages: ['framer-motion']
  },
  // Framer Motion을 위한 웹팩 설정
  webpack: (config) => {
    // Framer Motion ESM 호환성 설정
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
