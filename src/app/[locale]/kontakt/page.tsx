import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import ContactForm from '@/components/ContactForm';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'contact' });

  const isDe = locale === 'de';

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: isDe ? `${baseUrl}/de/kontakt` : `${baseUrl}/en/contact`,
      languages: {
        de: `${baseUrl}/de/kontakt`,
        en: `${baseUrl}/en/contact`,
        'x-default': `${baseUrl}/de/kontakt`,
      },
    },
    openGraph: {
      title: `${t('title')} | Haseloff Software Solutions`,
      description: t('subtitle'),
      url: isDe ? `${baseUrl}/de/kontakt` : `${baseUrl}/en/contact`,
      type: 'website',
    },
  };
}

export default function KontaktPage() {
  return <ContactForm />;
}
