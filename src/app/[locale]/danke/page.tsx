import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nachricht gesendet - Haseloff Software Solutions',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const t = useTranslations('thankYou');
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
        <div className="text-6xl mb-8">&#10003;</div>
        <h1 className="font-display font-extrabold text-display-lg mb-4">{t('title')}</h1>
        <p className="text-lg text-ink/45 mb-12">{t('message')}</p>
        <Link href="/"><Button variant="dark" size="lg">{t('backHome')}</Button></Link>
      </div>
    </section>
  );
}
