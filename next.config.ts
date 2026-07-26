import type { NextConfig } from 'next';

// github pages only
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const basePath = isGithubActions ? '/ASK-NGO-Website' : '';

const nextConfig: NextConfig = {
  output: 'export',
  
  basePath: basePath,
  assetPrefix: basePath,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;