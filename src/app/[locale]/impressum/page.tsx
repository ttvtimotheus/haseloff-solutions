import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'impressum' });
  const isDe = locale === 'de';

  return {
    title: t('title'),
    robots: { index: true, follow: true },
    alternates: {
      canonical: isDe ? `${baseUrl}/de/impressum` : `${baseUrl}/en/imprint`,
      languages: {
        de: `${baseUrl}/de/impressum`,
        en: `${baseUrl}/en/imprint`,
        'x-default': `${baseUrl}/de/impressum`,
      },
    },
  };
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'impressum' });

  return (
    <article className="container mx-auto px-4 sm:px-6 py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-extrabold text-display-xl mb-16">{t('title')}</h1>
        <div className="space-y-10">
          <section>
            <h2 className="font-display font-bold text-xl mb-3">{t('company')}</h2>
            <address className="text-ink/45 space-y-1 not-italic">
              <p>{t('companyName')}</p><p>{t('owner')}</p><p>{t('address')}</p><p>{t('city')}</p>
            </address>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-3">{t('contact')}</h2>
            <div className="text-ink/45 space-y-1"><p>{t('phone')}</p><p>{t('email')}</p></div>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl mb-3">{t('vat')}</h2>
            <p className="text-ink/45">{t('vatNumber')}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
