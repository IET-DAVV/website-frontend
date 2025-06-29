/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
    ],
  },
};

export default nextConfig;
