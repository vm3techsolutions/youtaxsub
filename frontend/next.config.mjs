/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:3000/"], // add external domains where images are hosted
  },
};

export default nextConfig;