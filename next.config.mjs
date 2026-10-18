/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {},
  images: {
    // Serve AVIF/WebP variants for all next/image usages.
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
