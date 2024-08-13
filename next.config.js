/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },
    ];
  },
};

module.exports = nextConfig;
