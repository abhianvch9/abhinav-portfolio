import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.31.127"],

};

export default nextConfig;