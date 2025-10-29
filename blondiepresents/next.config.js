/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      new URL(process.env.NEXT_PUBLIC_STORAGE_URL).hostname
    ],
  },
  async rewrites() {
    return [
      {
        source: '/storage/:path*',
        destination: `${process.env.NEXT_PUBLIC_STORAGE_URL}/:path*`,
      },
    ]
  }
}

module.exports = nextConfig