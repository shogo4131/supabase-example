const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   experimental: {
      typedRoutes: true,
      serverActions: true,
   }
}

module.exports = withKumaUI(nextConfig)
