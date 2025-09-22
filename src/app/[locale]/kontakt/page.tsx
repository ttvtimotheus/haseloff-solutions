import ContactForm from '@/components/ContactForm';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
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
