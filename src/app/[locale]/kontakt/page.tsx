import ContactForm from '@/components/ContactForm';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: `${t('title')} | Haseloff Software Solutions`,
    description: t('subtitle'),
    alternates: {
      languages: {
        de: '/de/kontakt',
        en: '/en/contact',
        'x-default': '/de/kontakt',
      },
    },
  };
}

export default function KontaktPage() {
  return <ContactForm />;
}
