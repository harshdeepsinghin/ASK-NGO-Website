import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  //  Required for static HTML builds (GitHub Pages & Cloudflare Pages)
  output: 'export',
  
  // Next.js to natively route all assets through  GitHub repository subfolder
  basePath: basePath,
  assetPrefix: basePath,

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Disables server-side image optimization so raw images can load statically
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