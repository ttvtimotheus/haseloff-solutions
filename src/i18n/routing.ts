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
  },
});
