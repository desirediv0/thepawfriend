import type { MetadataRoute } from 'next'
import { locations } from '@/lib/locations-data'
import { SITE_URL } from '@/lib/locations-seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/veterinary', '/grooming', '/dog-training', '/services', '/packages', '/about', '/contact', '/book', '/locations']
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8 })),
    ...locations.map((l) => ({ url: `${SITE_URL}/locations/${l.slug}`, changeFrequency: 'weekly' as const, priority: 0.9 })),
    ...['/privacy-policy', '/terms'].map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'yearly' as const, priority: 0.2 })),
  ]
}
