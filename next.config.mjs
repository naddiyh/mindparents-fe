/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
import { join } from "path";

// Initialize PWA with specific configurations
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  cacheName: "my-app-cache-v1",
  cacheVersion: "1.0.0",
  sw: "serviceWorker.js",
  fallbacks: {
    document: "/~offline",
    data: "/fallback.json",
    image: "/fallback.webp",
    audio: "/fallback.mp3",
    video: "/fallback.mp4",
    font: "/fallback-font.woff2",
  },
});

// Next.js configuration
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  // Add other Next.js configurations here if needed
  async redirects() {
    return [
      {
        source: '/admin/:path*',
        has: [
          {
            type: 'cookie',
            key: 'user',
            value: '^(?!.*"role":"admin").*$',
          },
        ],
        permanent: false,
        destination: '/not-authorized',
      },
      {
        source: '/admin/:path*',
        has: [
          {
            type: 'cookie',
            key: 'user',
            value: '^((?!.*"role").*)$', // If user cookie does not have role
          },
        ],
        permanent: false,
        destination: '/login',
      },
    ];
=======
  images: {
    domains: ["mindparents-ffd3b.appspot.com"], // Ganti dengan domain penyimpanan Anda
>>>>>>> 5c25709155c17e18941a86df6d35ca2de0a63d44
  },
};

export default async (phase, { defaultConfig }) => {
  const isDev = phase === "phase-development-server";
  const isProd = phase === "phase-production-build";

  if (isProd) {
    return withPWA(nextConfig);
  }

  return nextConfig;
};
