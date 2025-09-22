import type { MetadataRoute } from 'next';

const baseUrl = 'https://haseloff-software.de';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/de/danke', '/en/thank-you'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
