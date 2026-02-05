import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://shiina.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
