import withBundleAnalyzer from '@next/bundle-analyzer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'http',
                hostname: '117.239.195.147',
            },
            {
                protocol: 'https',
                hostname: 'ietdavv.edu.in',
            },
            {
                protocol: 'https',
                hostname: 'www.ietdavv.edu.in',
            }
        ],
    },
};

export default bundleAnalyzer(nextConfig);
