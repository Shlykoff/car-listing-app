import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [
      'testing-api.ru-rating.ru',
      'ru-msk-dr3-1.store.cloud.mts.ru'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testing-api.ru-rating.ru',
      },
      {
        protocol: 'https',
        hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
      },
    ],
  },
};

export default nextConfig;