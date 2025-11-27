import { getTranslations } from 'next-intl/server';
import PixelCard from '@/components/PixelCard';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'impressum' });
  
  return {
    title: `${t('title')} | Haseloff Software Solutions`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ImpressumPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'impressum' });

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
          {t('title')}
        </h1>

        <PixelCard>
          <div className="space-y-6">
            <section>
              <h2 className="font-display font-bold text-xl mb-3">
                {t('company')}
              </h2>
              <p>{t('companyName')}</p>
              <p>{t('owner')}</p>
              <p>{t('address')}</p>
              <p>{t('city')}</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl mb-3">
                {t('contact')}
              </h2>
              <p>{t('phone')}</p>
              <p>{t('email')}</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl mb-3">
                {t('vat')}
              </h2>
              <p>{t('vatNumber')}</p>
            </section>
          </div>
        </PixelCard>
      </div>
    </div>
  );
}
