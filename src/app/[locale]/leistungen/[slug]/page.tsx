import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { servicePages } from '@/content/services-data';
import { caseStudies } from '@/content/case-studies';
import AnimateIn from '@/components/AnimateIn';
import Breadcrumbs from '@/components/Breadcrumbs';

const baseUrl = 'https://haseloff-software.de';

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';
  const isDe = l === 'de';
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  const localePath = isDe ? `leistungen/${slug}` : `services/${slug}`;

  return {
    title: service.title[l],
    description: service.metaDescription[l],
    alternates: {
      canonical: `${baseUrl}/${locale}/${localePath}`,
      languages: {
        de: `${baseUrl}/de/leistungen/${slug}`,
        en: `${baseUrl}/en/services/${slug}`,
        'x-default': `${baseUrl}/de/leistungen/${slug}`,
      },
    },
    openGraph: {
      title: `${service.title[l]} | Haseloff Software Solutions`,
      description: service.metaDescription[l],
      url: `${baseUrl}/${locale}/${localePath}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';
  const isDe = l === 'de';

  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedCases = caseStudies.filter((c) => service.relatedCaseStudySlugs.includes(c.slug));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title[l],
    description: service.metaDescription[l],
    provider: { '@type': 'Organization', name: 'Haseloff Software Solutions', url: baseUrl },
    areaServed: ['DE', 'AT', 'CH'],
    serviceType: service.title.en,
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question[l],
      acceptedAnswer: { '@type': 'Answer', text: item.answer[l] },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="py-32 sm:py-40 relative overflow-hidden" aria-label={service.title[l]}>
        <div className="absolute top-0 right-0 w-[50vw] h-[80vh] max-w-[500px] gradient-blob opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4" aria-hidden />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: isDe ? 'Leistungen' : 'Services', href: '/leistungen' },
              { label: service.title[l] },
            ]}
          />

          <AnimateIn>
            <header className="max-w-3xl mb-20">
              <h1 className="font-display font-extrabold text-display-xl mb-6">{service.title[l]}</h1>
              <p className="text-lg text-ink/40">{service.subtitle[l]}</p>
            </header>
          </AnimateIn>

          <div className="max-w-3xl">
            <AnimateIn>
              <section id="overview" className="mb-20 rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-8 sm:p-10">
                <div className="space-y-4 text-ink/60 leading-relaxed text-lg">
                  {service.overview[l].split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="process" className="mb-20">
                <h2 className="font-display font-extrabold text-display-lg mb-12">
                  {isDe ? 'Unser Prozess' : 'Our Process'}
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-ink/[0.08] bg-ink/[0.02] p-6 sm:p-8 hover:border-ink/[0.12] hover:bg-ink/[0.03] transition-all duration-300 flex gap-6"
                    >
                      <span className="font-display text-sm font-extrabold text-ink/30 tracking-widest tabular-nums w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-xl mb-2">{step.step[l]}</h3>
                        <p className="text-ink/50 leading-relaxed">{step.description[l]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="technologies" className="mb-20">
                <h2 className="font-display font-extrabold text-display-lg mb-8">
                  {isDe ? 'Technologien' : 'Technologies'}
                </h2>
                <div className="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-8">
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-display text-sm tracking-wide bg-ink/[0.06] text-ink/60 px-4 py-2.5 rounded-full border border-ink/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="industries" className="mb-20">
                <h2 className="font-display font-extrabold text-display-lg mb-8">
                  {isDe ? 'Branchen' : 'Industries'}
                </h2>
                <div className="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] p-8">
                  <div className="flex flex-wrap gap-3">
                    {service.industries[l].map((industry) => (
                      <span
                        key={industry}
                        className="font-display text-sm border border-ink/15 text-ink/50 px-4 py-2.5 rounded-full hover:border-ink/25 hover:text-ink/70 transition-colors"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="use-cases" className="mb-20">
                <h2 className="font-display font-extrabold text-display-lg mb-12">
                  {isDe ? 'Anwendungsfälle' : 'Use Cases'}
                </h2>
                <div className="space-y-6">
                  {service.useCases.map((useCase, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-ink/[0.08] bg-ink/[0.02] pl-8 pr-6 py-6 border-l-4 border-l-[#818cf8] hover:bg-ink/[0.03] transition-colors"
                    >
                      <h3 className="font-display font-bold text-lg mb-2">{useCase.title[l]}</h3>
                      <p className="text-ink/50 leading-relaxed">{useCase.description[l]}</p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="faq" className="mb-20">
                <h2 className="font-display font-extrabold text-display-lg mb-12">
                  {isDe ? 'Häufige Fragen' : 'FAQ'}
                </h2>
                <div className="rounded-2xl border border-ink/[0.08] bg-ink/[0.02] overflow-hidden">
                  {service.faq.map((item, i) => (
                    <details
                      key={i}
                      className="group border-b border-ink/[0.06] last:border-0 [&:last-child_summary]:rounded-b-2xl"
                    >
                      <summary className="flex items-center justify-between gap-6 py-6 px-6 cursor-pointer list-none font-display font-semibold text-ink/60 group-open:text-ink transition-colors hover:bg-ink/[0.02]">
                        {item.question[l]}
                        <span className="text-ink/25 text-xl font-light shrink-0 group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="pb-6 px-6 text-ink/50 leading-relaxed -mt-1 bg-ink/[0.02]">{item.answer[l]}</p>
                    </details>
                  ))}
                </div>
              </section>
            </AnimateIn>

            {relatedCases.length > 0 && (
              <AnimateIn>
                <section aria-label={isDe ? 'Verwandte Referenzen' : 'Related case studies'} className="mt-12 pt-16 border-t border-ink/10 mb-20">
                  <h2 className="font-display font-extrabold text-display-lg mb-12">
                    {isDe ? 'Verwandte Projekte' : 'Related projects'}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedCases.map((study) => (
                      <Link
                        key={study.slug}
                        href={{ pathname: '/referenzen/[slug]', params: { slug: study.slug } }}
                        className="group block rounded-xl border border-ink/[0.08] bg-ink/[0.02] p-6 hover:border-ink/[0.15] hover:bg-ink/[0.04] transition-all duration-300"
                      >
                        <h3 className="font-display font-bold text-lg mb-2">{study.title[l]}</h3>
                        <p className="text-ink/40 text-sm line-clamp-2">{study.subtitle[l]}</p>
                        <span className="inline-flex items-center gap-2 mt-4 text-sm font-display font-semibold text-ink/40 group-hover:text-ink/60">
                          {isDe ? 'Fallstudie lesen' : 'Read case study'}
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            )}
          </div>

          <AnimateIn>
            <div className="section-dark rounded-2xl p-12 sm:p-16 text-center mt-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-1/2 w-[80%] h-[60%] max-w-[400px] gradient-blob opacity-20 pointer-events-none -translate-x-1/2 translate-y-1/2" aria-hidden />
              <div className="relative z-10">
                <h2 className="font-display font-extrabold text-display-lg text-cream mb-4">
                  {isDe ? 'Projekt besprechen?' : 'Discuss your project?'}
                </h2>
                <p className="text-cream/40 mb-8 max-w-lg mx-auto">
                  {isDe
                    ? 'Erstgespräch ist kostenlos und unverbindlich. Erzähl uns, was du vorhast.'
                    : 'First consultation is free, no strings attached. Tell us what you have in mind.'}
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
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
