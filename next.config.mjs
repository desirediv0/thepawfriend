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
  async redirects() {
    return [
      // City pages live at /<city> (same as the old site). Old /locations/<city> links keep working.
      { source: '/locations/:city(delhi|gurugram|noida|greater-noida|ghaziabad|faridabad|lucknow)', destination: '/:city', permanent: true },
      { source: '/gurgaon', destination: '/gurugram', permanent: true },
    ]
  },
  async headers() {
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }]
    return [
      { source: '/photos/:path*', headers: cache },
      { source: '/:file(logo.png|icon.svg|apple-icon.png)', headers: cache },
    ]
  },
}

export default nextConfig
