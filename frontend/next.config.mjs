/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://localhost:3000/", "https://main.d2dpneqojmieou.amplifyapp.com/"], // add external domains where images are hosted
  },
};

export default nextConfig;