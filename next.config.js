/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "robohash.org" },
    ],
  },
};

module.exports = nextConfig;
