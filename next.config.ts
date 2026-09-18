import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.31.127"],

  basePath: "/abhinav-portfolio",

  assetPrefix: "/abhinav-portfolio/",
};

export default nextConfig;