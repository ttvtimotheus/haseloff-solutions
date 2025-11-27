import { getTranslations } from 'next-intl/server';
import PixelCard from '@/components/PixelCard';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'datenschutz' });
  
  return {
    title: `${t('title')} | Haseloff Software Solutions`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DatenschutzPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'datenschutz' });

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
          {t('title')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <PixelCard className="mb-6">
            <p className="text-gray-600">{t('intro')}</p>
          </PixelCard>

          <PixelCard>
            <h2 className="font-display font-bold text-xl mb-3">
              {t('controller.title')}
            </h2>
            <p className="text-gray-600">{t('controller.text')}</p>
          </PixelCard>

          <PixelCard>
            <h2 className="font-display font-bold text-xl mb-3">
              {t('dataCollection.title')}
            </h2>
            <p className="text-gray-600">{t('dataCollection.text')}</p>
          </PixelCard>

          <PixelCard>
            <h2 className="font-display font-bold text-xl mb-3">
              {t('cookies.title')}
            </h2>
            <p className="text-gray-600">{t('cookies.text')}</p>
          </PixelCard>

          <PixelCard>
            <h2 className="font-display font-bold text-xl mb-3">
              {t('contact.title')}
            </h2>
            <p className="text-gray-600">{t('contact.text')}</p>
          </PixelCard>

          <PixelCard>
            <h2 className="font-display font-bold text-xl mb-3">
              {t('rights.title')}
            </h2>
            <p className="text-gray-600">{t('rights.text')}</p>
          </PixelCard>
        </div>
      </div>
    </div>
  );
}
