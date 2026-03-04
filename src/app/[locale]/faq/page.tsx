import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { servicePages } from '@/content/services-data';
import AnimateIn from '@/components/AnimateIn';
import Breadcrumbs from '@/components/Breadcrumbs';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const isDe = locale === 'de';

  return {
    title: isDe ? 'Häufige Fragen (FAQ)' : 'Frequently Asked Questions (FAQ)',
    description: isDe
      ? 'Antworten auf die häufigsten Fragen zu Softwareentwicklung, Kosten, Technologien und Zusammenarbeit mit Haseloff Software Solutions.'
      : 'Answers to the most common questions about software development, pricing, technologies, and working with Haseloff Software Solutions.',
    alternates: {
      canonical: `${baseUrl}/${locale}/faq`,
      languages: {
        de: `${baseUrl}/de/faq`,
        en: `${baseUrl}/en/faq`,
        'x-default': `${baseUrl}/de/faq`,
      },
    },
    openGraph: {
      title: isDe ? 'FAQ | Haseloff Software Solutions' : 'FAQ | Haseloff Software Solutions',
      url: `${baseUrl}/${locale}/faq`,
      type: 'website',
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';
  const isDe = l === 'de';
  const t = await getTranslations({ locale, namespace: 'faq' });

  const generalFaqIds = ['duration', 'cost', 'technologies', 'maintenance', 'process', 'support'];
  const generalFaqs = generalFaqIds.map((id) => ({
    question: t(`items.${id}.question` as never),
    answer: t(`items.${id}.answer` as never),
  }));

  const serviceFaqs = servicePages.flatMap((service) =>
    service.faq.map((item) => ({
      question: item.question[l],
      answer: item.answer[l],
      service: service.title[l],
    }))
  );

  const allFaqItems = [
    ...generalFaqs.map((f) => ({ question: f.question, answer: f.answer })),
    ...serviceFaqs.map((f) => ({ question: f.question, answer: f.answer })),
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-32 sm:py-40" aria-label="FAQ">
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ' },
            ]}
          />

          <AnimateIn>
            <h1 className="font-display font-extrabold text-display-xl mb-6">
              {isDe ? 'Häufige Fragen' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-lg text-ink/40 max-w-2xl mb-20">
              {isDe
                ? 'Straight talk – keine PR-Antworten. Alles, was du über die Zusammenarbeit mit uns wissen musst.'
                : 'Straight talk – no PR answers. Everything you need to know about working with us.'}
            </p>
          </AnimateIn>

          <div className="max-w-3xl">
            <AnimateIn>
              <h2 className="font-display font-extrabold text-display-lg mb-10">
                {isDe ? 'Allgemein' : 'General'}
              </h2>
            </AnimateIn>
            <div className="mb-20">
              {generalFaqs.map((item, i) => (
                <AnimateIn key={i} delay={i * 0.03}>
                  <details className="group border-b border-ink/[0.08]">
                    <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none font-display font-semibold text-ink/60 group-open:text-ink transition-colors">
                      {item.question}
                      <span className="text-ink/25 text-xl font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="pb-6 text-ink/50 leading-relaxed -mt-1">{item.answer}</p>
                  </details>
                </AnimateIn>
              ))}
            </div>

            {servicePages.map((service, sIndex) => {
              const faqs = service.faq;
              if (faqs.length === 0) return null;
              return (
                <div key={service.slug} className="mb-20">
                  <AnimateIn>
                    <h2 className="font-display font-extrabold text-display-lg mb-10">
                      {service.title[l]}
                    </h2>
                  </AnimateIn>
                  {faqs.map((item, i) => (
                    <AnimateIn key={i} delay={(sIndex * faqs.length + i) * 0.02}>
                      <details className="group border-b border-ink/[0.08]">
                        <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none font-display font-semibold text-ink/60 group-open:text-ink transition-colors">
                          {item.question[l]}
                          <span className="text-ink/25 text-xl font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="pb-6 text-ink/50 leading-relaxed -mt-1">{item.answer[l]}</p>
                      </details>
                    </AnimateIn>
                  ))}
                </div>
              );
            })}

            <AnimateIn>
              <div className="section-dark rounded-2xl p-12 sm:p-16 text-center mt-12">
                <h2 className="font-display font-extrabold text-2xl text-cream mb-4">
                  {isDe ? 'Noch Fragen?' : 'Still have questions?'}
                </h2>
                <p className="text-cream/40 mb-8 max-w-lg mx-auto">
                  {isDe
                    ? 'Schreib uns. Erstberatung ist kostenlos und unverbindlich.'
                    : 'Get in touch. First consultation is free, no strings attached.'}
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 bg-cream text-ink px-8 py-4 rounded-full font-display font-bold text-sm hover:bg-cream/90 transition-colors"
                >
                  {isDe ? 'Kontakt aufnehmen' : 'Get in touch'}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
