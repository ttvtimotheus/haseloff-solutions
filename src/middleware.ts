import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const middleware = createMiddleware({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localeDetection: true,
});

export default function (request: NextRequest) {
  return middleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
