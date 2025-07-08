/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Or 'https' if they are served over HTTPS
        hostname: "googleusercontent.com",
        port: "", // Leave empty if default ports (80 for http, 443 for https)
        pathname: "/profile/picture/**", // Use a wildcard if paths can vary widely
      },
        {
        protocol: "http", // Or 'https' if they are served over HTTPS
        hostname: "lh3.googleusercontent.com",
        port: "", // Leave empty if default ports (80 for http, 443 for https)
        pathname: "/**", // Use a wildcard if paths can vary widely
      },
      {
        protocol: "https", // Or 'https' if they are served over HTTPS
        hostname: "images.unsplash.com",
        port: "", // Leave empty if default ports (80 for http, 443 for https)
        pathname: "/**", // Use a wildcard if paths can vary widely
      },
    ],

    domains: ["www.ietdavv.edu.in"],
  },
};

export default nextConfig;
