/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    modularizeImports: {
      "lucide-react": {
        transform: "lucide-react/dist/esm/icons/{{member}}",
      },
    },
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "false",
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer(nextConfig);
