/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/we-can-voice-website', // Replace with your repository name
  assetPrefix: '/we-can-voice-website/', // Replace with your repository name
}

module.exports = nextConfig