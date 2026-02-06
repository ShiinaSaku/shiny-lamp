import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://shiina.xyz",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://shiina.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
