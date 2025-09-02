/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ❌ remove output: "export"
  images: {
    domains: [], // add any image domains you use (if needed)
  },
};

export default nextConfig;