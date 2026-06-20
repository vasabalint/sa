import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/painter-gallery', // GitHub Pages: https://vasabalint.github.io/painter-gallery/
};

export default nextConfig;
