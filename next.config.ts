import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // DESC: This configuration allows us to use SVG files as React components.
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      include: /src\/assets\/.*\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // DESC: This configuration allows us to load SVG files as React components.
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
