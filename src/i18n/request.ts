import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale || 'de';

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
