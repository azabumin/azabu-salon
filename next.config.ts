import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/azabu-salon",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
