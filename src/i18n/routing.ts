import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  pathnames: {
    '/': '/',
    '/impressum': {
      en: '/imprint',
      de: '/impressum',
    },
    '/datenschutz': {
      en: '/privacy',
      de: '/datenschutz',
    },
    '/danke': {
      en: '/thank-you',
      de: '/danke',
    },
    '/kontakt': {
      en: '/contact',
      de: '/kontakt',
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/referenzen': {
      en: '/case-studies',
      de: '/referenzen',
    },
    '/referenzen/[slug]': {
      en: '/case-studies/[slug]',
      de: '/referenzen/[slug]',
    },
    '/leistungen': {
      en: '/services',
      de: '/leistungen',
    },
    '/leistungen/[slug]': {
      en: '/services/[slug]',
      de: '/leistungen/[slug]',
    },
    '/faq': '/faq',
  },
});
