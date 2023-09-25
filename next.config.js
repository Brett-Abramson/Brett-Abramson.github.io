/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Exclude MP4 files from being processed by webpack
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/", // Specify the path where Next.js should serve the MP4 files from
          outputPath: "static/",
        },
      },
    });

    return config;
  },
  // output: "export",
  // basePath: "/Brett-Abramson.github.io",
};

module.exports = nextConfig;
