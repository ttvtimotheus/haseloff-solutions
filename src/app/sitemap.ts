import type { MetadataRoute } from 'next';
import { blogArticles } from '@/content/blog';
import { caseStudies } from '@/content/case-studies';
import { servicePages } from '@/content/services-data';

const baseUrl = 'https://haseloff-software.de';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
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
      url: `${baseUrl}/de/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/en/blog`, de: `${baseUrl}/de/blog` } },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/en/blog`, de: `${baseUrl}/de/blog` } },
    },
    {
      url: `${baseUrl}/de/referenzen`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/en/case-studies`, de: `${baseUrl}/de/referenzen` } },
    },
    {
      url: `${baseUrl}/en/case-studies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/en/case-studies`, de: `${baseUrl}/de/referenzen` } },
    },
    {
      url: `${baseUrl}/de/leistungen`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/en/services`, de: `${baseUrl}/de/leistungen` } },
    },
    {
      url: `${baseUrl}/en/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { en: `${baseUrl}/en/services`, de: `${baseUrl}/de/leistungen` } },
    },
    {
      url: `${baseUrl}/de/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: `${baseUrl}/en/faq`, de: `${baseUrl}/de/faq` } },
    },
    {
      url: `${baseUrl}/en/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: `${baseUrl}/en/faq`, de: `${baseUrl}/de/faq` } },
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

  const blogPages: MetadataRoute.Sitemap = blogArticles.flatMap((article) => [
    {
      url: `${baseUrl}/de/blog/${article.slug}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${article.slug}`,
          de: `${baseUrl}/de/blog/${article.slug}`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog/${article.slug}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog/${article.slug}`,
          de: `${baseUrl}/de/blog/${article.slug}`,
        },
      },
    },
  ]);

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.flatMap((study) => [
    {
      url: `${baseUrl}/de/referenzen/${study.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/case-studies/${study.slug}`,
          de: `${baseUrl}/de/referenzen/${study.slug}`,
        },
      },
    },
    {
      url: `${baseUrl}/en/case-studies/${study.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/case-studies/${study.slug}`,
          de: `${baseUrl}/de/referenzen/${study.slug}`,
        },
      },
    },
  ]);

  const servicePageEntries: MetadataRoute.Sitemap = servicePages.flatMap((service) => [
    {
      url: `${baseUrl}/de/leistungen/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services/${service.slug}`,
          de: `${baseUrl}/de/leistungen/${service.slug}`,
        },
      },
    },
    {
      url: `${baseUrl}/en/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/services/${service.slug}`,
          de: `${baseUrl}/de/leistungen/${service.slug}`,
        },
      },
    },
  ]);

  return [...staticPages, ...blogPages, ...caseStudyPages, ...servicePageEntries];
}
