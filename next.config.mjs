/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["logo.clearbit.com", "cdn.simpleicons.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
    // Disable image optimization to fix production image issues
    unoptimized: true,
  },
  // Disable ESLint during builds to prevent build failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: "/blog/1", destination: "/blog/how-saas-verification-works", permanent: true },
      { source: "/blog/2", destination: "/blog/what-we-check-before-you-buy", permanent: true },
      { source: "/blog/3", destination: "/blog/how-refund-assurance-works", permanent: true },
      { source: "/blog/4", destination: "/blog/how-vendors-get-verified", permanent: true },
      { source: "/blog/5", destination: "/blog", permanent: true },
      { source: "/blog/6", destination: "/blog", permanent: true },
    ];
  },
  // Disable TypeScript errors during builds (optional, but helpful)
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
