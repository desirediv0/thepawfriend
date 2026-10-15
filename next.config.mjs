/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve resized AVIF/WebP instead of the full-size originals (needs `sharp`, listed in dependencies).
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  compress: true,
  async headers() {
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }]
    return [
      { source: '/photos/:path*', headers: cache },
      { source: '/:file(logo.png|icon.svg|apple-icon.png)', headers: cache },
    ]
  },
}

export default nextConfig
