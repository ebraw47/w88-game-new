import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/webp"],
    qualities: [75, 80, 85, 90, 100],
  },
};

export default nextConfig;
