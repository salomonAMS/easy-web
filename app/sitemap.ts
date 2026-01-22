import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://easy-webco.vercel.app'
  const lastModified = new Date()

  // Liste de toutes les pages du site
  const routes = [
    '',
    '/services',
    '/modernisation',
    '/automatisations',
    '/etudes-cas',
    '/tarifs',
    '/a-propos',
    '/contact',
    '/conditions',
    '/confidentialite',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
