import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localeDetection: true,
});

export default middleware;

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
