import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings for responsive images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Turbopack configuration (empty to silence Next.js 16 warning)
  // Note: For Vagrant file watching, we use --webpack flag in dev script
  turbopack: {},
  
  // Webpack configuration for file watching in VMs (Vagrant)
  // Used when running with --webpack flag
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
