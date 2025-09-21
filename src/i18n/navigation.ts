import { createNavigation } from 'next-intl/navigation';

export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de' as const;

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
});
