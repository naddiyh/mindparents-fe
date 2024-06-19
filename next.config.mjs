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
  sw: "serviceWorker.js", // Assuming serviceWorker.ts is transpiled to serviceWorker.js

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
  },
};

// Export configuration function
export default async (phase, { defaultConfig }) => {
  // Check for specific build phases if necessary
  // For example, PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD
  const isDev = phase === "phase-development-server";
  const isProd = phase === "phase-production-build";

  // Apply PWA configuration only for production builds
  if (isProd) {
    return withPWA(nextConfig);
  }

  // Return default or custom configuration for other phases
  return nextConfig;
};
