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
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sun-10k.sk' }],
        destination: 'https://sun-10k.sk/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
