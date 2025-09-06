import withBundleAnalyzer from '@next/bundle-analyzer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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
    // Optimize image loading
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  // Performance optimizations - swcMinify is now default in Next.js 15
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable modern features
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
};

export default bundleAnalyzer(nextConfig);
