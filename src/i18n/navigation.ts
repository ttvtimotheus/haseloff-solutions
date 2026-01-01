import { createNavigation } from 'next-intl/navigation';

export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de' as const;

export const pathnames = {
  '/': '/',
  '/impressum': {
    en: '/imprint',
    de: '/impressum'
  },
  '/datenschutz': {
    en: '/privacy',
    de: '/datenschutz'  
  },
  '/danke': {
    en: '/thank-you',
    de: '/danke'
  },
  '/kontakt': {
    en: '/contact',
    de: '/kontakt'
  }
} as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  pathnames,
});
