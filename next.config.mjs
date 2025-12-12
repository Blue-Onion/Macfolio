/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {},
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
