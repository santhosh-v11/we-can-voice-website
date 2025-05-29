/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/we-can-voice-website',
  assetPrefix: '/we-can-voice-website/',
}

module.exports = nextConfig