/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
    unoptimized: true, // 👈 disables image optimization
  },
};

export default nextConfig;
