import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'datenschutz' });
  const isDe = locale === 'de';

  return {
    title: t('title'),
    robots: { index: true, follow: true },
    alternates: {
      canonical: isDe ? `${baseUrl}/de/datenschutz` : `${baseUrl}/en/privacy`,
      languages: {
        de: `${baseUrl}/de/datenschutz`,
        en: `${baseUrl}/en/privacy`,
        'x-default': `${baseUrl}/de/datenschutz`,
      },
    },
  };
}

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = hasLocale(routing.locales, raw) ? raw : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'datenschutz' });

  const sections = [
    { title: t('controller.title'), text: t('controller.text') },
    { title: t('dataCollection.title'), text: t('dataCollection.text') },
    { title: t('cookies.title'), text: t('cookies.text') },
    { title: t('contact.title'), text: t('contact.text') },
    { title: t('rights.title'), text: t('rights.text') },
  ];

  return (
    <article className="container mx-auto px-4 sm:px-6 py-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-extrabold text-display-xl mb-4">{t('title')}</h1>
        <p className="text-ink/40 mb-16 text-lg">{t('intro')}</p>
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} className="border-b border-ink/10 pb-8 last:border-0">
              <h2 className="font-display font-bold text-xl mb-3">{section.title}</h2>
              <p className="text-ink/45 leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
