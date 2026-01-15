/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
  // Ensure your build can handle the new 2026 packages
  transpilePackages: ["@google/genai"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ykenirlyotmlkqjpvnjy.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/embed",
        headers: [{ key: "Content-Security-Policy", value: "frame-src 'self" }],
      },
    ];
  },
};

export default nextConfig;
