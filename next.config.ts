import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fpoj1-1.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
