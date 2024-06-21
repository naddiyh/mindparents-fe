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
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "mindparents-ffd3b.appspot.com",
    ],
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
