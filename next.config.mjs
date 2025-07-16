/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "googleusercontent.com",
        port: "",
        pathname: "/profile/picture/**",
      },
      {
        protocol: "http",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ietdavv.edu.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
