/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.desnivel.com',
        port: '',
        pathname: '/images/**',
      }
    ],
    domains: ['www.desnivel.com', 'images.unsplash.com'],
    unoptimized: true
  },
}

export default nextConfig 