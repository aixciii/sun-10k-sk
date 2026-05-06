/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecoprodukt.sk',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myshoptet.com',
        pathname: '/usr/**',
      },
    ],
  },
}

export default nextConfig
