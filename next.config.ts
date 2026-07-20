import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
   turbopack: {
    root:path.resolve(__dirname),
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;