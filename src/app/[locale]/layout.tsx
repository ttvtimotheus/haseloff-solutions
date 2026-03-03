import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Sora } from 'next/font/google';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GradientBackground from '@/components/GradientBackground';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

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
    metadataBase: new URL('https://haseloff-software.de'),
    alternates: {
      languages: {
        de: '/de',
        en: '/en',
        'x-default': '/de',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://haseloff-software.de',
      siteName: 'Haseloff Software Solutions',
      images: [
        {
          url: '/og',
          width: 1200,
          height: 630,
          alt: 'Haseloff Software Solutions',
        },
      ],
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [{ url: '/favicon.ico' }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Haseloff Software Solutions',
    url: 'https://haseloff-software.de',
    logo: 'https://haseloff-software.de/nur-logo-fuer-icon.svg',
    description:
      locale === 'de'
        ? 'Deine Vision. Unser Code.'
        : 'Your Vision. Our Code.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Breite Straße 7',
      postalCode: '39288',
      addressLocality: 'Burg OT Detershagen',
      addressCountry: 'DE',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+49 1525 870 5975',
        contactType: 'customer service',
        email: 'kontakt@haseloff-solutions.de',
        availableLanguage: ['de', 'en'],
      },
    ],
  } as const;

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Haseloff Software Solutions',
    url: 'https://haseloff-software.de',
    inLanguage: locale,
  } as const;

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${sora.variable}`}
      data-scroll-behavior="smooth"
    >
      <body
        className="min-h-screen bg-cream text-ink font-sans antialiased"
        suppressHydrationWarning={true}
      >
        <NextIntlClientProvider>
          <GradientBackground />
          <Header />
          <main role="main">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
