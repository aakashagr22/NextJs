// const nextConfig = {
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     domains: ["localhost"],
//     unoptimized: true,
//   },
//   // Ensure we're using the Pages Router, not the App Router
//   experimental: {
//     appDir: false,
//   },
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove the experimental.appDir option
  //   images: {
//     domains: ["localhost"],
//     unoptimized: true,
//   },
};

module.exports = nextConfig