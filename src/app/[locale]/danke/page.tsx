import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import PixelButton from '@/components/PixelButton';
import PixelCard from '@/components/PixelCard';
import ProjectsLink from '@/components/ProjectsLink';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nachricht gesendet - Haseloff Software Solutions',
  description: 'Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    languages: {
      de: '/de/danke',
      en: '/en/thank-you',
      'x-default': '/de/danke',
    },
  },
};

export default function ThankYouPage() {
  const t = useTranslations('thankYou');

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <PixelCard className="p-8 md:p-12">
            {/* Success Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-accent text-primary rounded-pixel mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <rect x="9" y="12" width="2" height="1" />
                <rect x="11" y="13" width="2" height="1" />
                <rect x="13" y="14" width="2" height="1" />
                <rect x="15" y="15" width="2" height="1" />
                <rect x="6" y="9" width="1" height="2" />
                <rect x="7" y="10" width="1" height="2" />
                <rect x="8" y="11" width="1" height="2" />
                <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl mb-4">
              {t('title')}
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              {t('message')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <span className="text-sm">{t('responseTime')}</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <span className="text-sm">{t('contact')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <PixelButton 
                  variant="primary" 
                  size="lg"
                >
                  {t('backHome')}
                </PixelButton>
              </Link>
              
              <ProjectsLink sectionId="projekte">
                <PixelButton 
                  variant="secondary" 
                  size="lg"
                  pixelCorner="bottom-right"
                >
                  {t('viewProjects')}
                </PixelButton>
              </ProjectsLink>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
