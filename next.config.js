


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disabled as it's automatic in React 19
  compiler: {
    reactRemoveProperties: true,
  },
  experimental: {
    reactCompiler: true, // Enable React Forget compiler
  }
}

module.exports = nextConfig