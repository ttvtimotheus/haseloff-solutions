import type { MetadataRoute } from 'next';

const baseUrl = 'https://haseloff-software.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/de`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { en: `${baseUrl}/en`, de: `${baseUrl}/de` } },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { en: `${baseUrl}/en`, de: `${baseUrl}/de` } },
    },
    {
      url: `${baseUrl}/de/kontakt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: `${baseUrl}/en/contact`, de: `${baseUrl}/de/kontakt` } },
    },
    {
      url: `${baseUrl}/en/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: `${baseUrl}/en/contact`, de: `${baseUrl}/de/kontakt` } },
    },
    {
      url: `${baseUrl}/de/impressum`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: { languages: { en: `${baseUrl}/en/imprint`, de: `${baseUrl}/de/impressum` } },
    },
    {
      url: `${baseUrl}/en/imprint`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: { languages: { en: `${baseUrl}/en/imprint`, de: `${baseUrl}/de/impressum` } },
    },
    {
      url: `${baseUrl}/de/datenschutz`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: { languages: { en: `${baseUrl}/en/privacy`, de: `${baseUrl}/de/datenschutz` } },
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: { languages: { en: `${baseUrl}/en/privacy`, de: `${baseUrl}/de/datenschutz` } },
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ];
}
