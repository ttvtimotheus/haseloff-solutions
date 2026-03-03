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

const baseUrl = 'https://haseloff-solutions.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const keywords = locale === 'de'
    ? ['Softwareentwicklung', 'Webentwicklung', 'App-Entwicklung', 'React', 'Next.js', 'TypeScript', 'Web-App', 'Sachsen-Anhalt', 'Software Agentur', 'Individuelle Software', 'Haseloff Software Solutions']
    : ['Software Development', 'Web Development', 'App Development', 'React', 'Next.js', 'TypeScript', 'Web App', 'Software Agency', 'Custom Software', 'Haseloff Software Solutions'];

  return {
    title: {
      default: t('title'),
      template: '%s | Haseloff Software Solutions',
    },
    description: t('description'),
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: '/de',
        en: '/en',
        'x-default': '/de',
      },
    },
    authors: [{ name: 'Timo Haseloff', url: baseUrl }],
    creator: 'Haseloff Software Solutions',
    publisher: 'Haseloff Software Solutions',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: baseUrl,
      siteName: 'Haseloff Software Solutions',
      images: [
        {
          url: '/og',
          width: 1200,
          height: 630,
          alt: locale === 'de'
            ? 'Haseloff Software Solutions – Software, die verkauft.'
            : 'Haseloff Software Solutions – Software that sells.',
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
      creator: '@haseloff_dev',
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
    manifest: '/manifest.json',
    category: 'technology',
    classification: 'Software Development Agency',
    other: {
      'theme-color': '#0a0a0a',
      'color-scheme': 'light',
      'google-site-verification': '',
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

  const isDe = locale === 'de';

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Haseloff Software Solutions',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/nur-logo-fuer-icon.svg`,
      width: 512,
      height: 512,
    },
    image: `${baseUrl}/og`,
    description: isDe
      ? 'Wir entwickeln Websites, Apps und digitale Produkte für Unternehmen, die nicht untergehen wollen. Strategisch gedacht, sauber gebaut, messbar erfolgreich.'
      : 'We build websites, apps, and digital products for businesses that refuse to settle. Strategically designed, cleanly built, measurably successful.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Breite Straße 7',
      postalCode: '39288',
      addressLocality: 'Burg',
      addressRegion: 'Sachsen-Anhalt',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.2725',
      longitude: '11.8569',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49-1525-870-5975',
      contactType: 'customer service',
      email: 'kontakt@haseloff-solutions.de',
      availableLanguage: ['German', 'English'],
      areaServed: ['DE', 'AT', 'CH'],
    },
    founder: {
      '@type': 'Person',
      name: 'Timo Haseloff',
      jobTitle: isDe ? 'Gründer & Softwareentwickler' : 'Founder & Software Developer',
    },
    foundingDate: '2021',
    priceRange: '€€',
    paymentAccepted: 'Bank Transfer, Invoice',
    currenciesAccepted: 'EUR',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [],
    knowsAbout: [
      'React', 'Next.js', 'TypeScript', 'React Native', 'Node.js', 'PostgreSQL',
      'Web Development', 'App Development', 'Custom Software', 'UI/UX Design',
      'Software Architecture', 'API Development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isDe ? 'Softwareentwicklung Dienstleistungen' : 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isDe ? 'Web-Apps & Websites' : 'Web Apps & Websites',
            description: isDe
              ? 'Schnelle, skalierbare Webanwendungen, die Kunden gewinnen und halten.'
              : 'Fast, scalable web applications that win and retain customers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isDe ? 'Mobile Apps' : 'Mobile Apps',
            description: isDe
              ? 'Apps, die Nutzer lieben. Native Performance, durchdachte UX.'
              : 'Apps that users love. Native performance, thoughtful UX.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isDe ? 'Individuelle Systeme' : 'Custom Systems',
            description: isDe
              ? 'Backend-Architekturen, APIs und Automatisierungen für mehr Wachstum.'
              : 'Backend architectures, APIs, and automations for more growth.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '12',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Haseloff Software Solutions',
    url: baseUrl,
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${locale}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/${locale}/#webpage`,
    url: `${baseUrl}/${locale}`,
    name: isDe
      ? 'Haseloff Software Solutions – Software, die verkauft.'
      : 'Haseloff Software Solutions – Software that sells.',
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: { '@id': `${baseUrl}/#organization` },
    inLanguage: locale === 'de' ? 'de-DE' : 'en-US',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    description: isDe
      ? 'Wir entwickeln Websites, Apps und digitale Produkte für Unternehmen, die nicht untergehen wollen.'
      : 'We build websites, apps, and digital products for businesses that refuse to settle.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${locale}`,
      },
    ],
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </body>
    </html>
  );
}
