import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.seadn.io"], // Add the domain here
  },
};

export default nextConfig;
