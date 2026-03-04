import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import BlogPreview from '@/components/BlogPreview';
import Services from '@/components/Services';
import Philosophy from '@/components/Philosophy';
import FAQ from '@/components/FAQ';
import CtaBanner from '@/components/CtaBanner';
import ContactForm from '@/components/ContactForm';
import FAQSchema from '@/components/FAQSchema';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        de: `${baseUrl}/de`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/de`,
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Projects />
      <Stats />
      <BlogPreview />
      <Services />
      <Philosophy />
      <FAQ />
      <CtaBanner />
      <ContactForm />
      <FAQSchema />
    </>
  );
}
