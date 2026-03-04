import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { caseStudies } from '@/content/case-studies';
import AnimateIn from '@/components/AnimateIn';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';
  const isDe = l === 'de';

  return {
    title: isDe ? 'Referenzen' : 'Case Studies',
    description: isDe
      ? 'Ausgewählte Projekte und Fallstudien von Haseloff Software Solutions. Erfahren Sie, wie wir Unternehmen mit maßgeschneiderter Software unterstützen.'
      : 'Selected projects and case studies from Haseloff Software Solutions. See how we help businesses with custom software.',
    alternates: {
      canonical: isDe ? `${baseUrl}/de/referenzen` : `${baseUrl}/en/case-studies`,
      languages: {
        de: `${baseUrl}/de/referenzen`,
        en: `${baseUrl}/en/case-studies`,
        'x-default': `${baseUrl}/de/referenzen`,
      },
    },
    openGraph: {
      title: isDe ? 'Referenzen | Haseloff Software Solutions' : 'Case Studies | Haseloff Software Solutions',
      description: isDe
        ? 'Ausgewählte Projekte und Fallstudien von Haseloff Software Solutions.'
        : 'Selected projects and case studies from Haseloff Software Solutions.',
      url: isDe ? `${baseUrl}/de/referenzen` : `${baseUrl}/en/case-studies`,
      type: 'website',
    },
  };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';

  return (
    <section className="py-32 sm:py-40" aria-label={l === 'de' ? 'Referenzen' : 'Case Studies'}>
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <h1 className="font-display font-extrabold text-display-xl mb-6">
            {l === 'de' ? 'Referenzen' : 'Case Studies'}
          </h1>
          <p className="text-lg text-ink/40 max-w-2xl mb-20">
            {l === 'de'
              ? 'Echte Projekte, echte Ergebnisse. So haben wir Unternehmen mit maßgeschneiderter Software nach vorne gebracht.'
              : 'Real projects, real results. How we helped businesses move forward with custom software.'}
          </p>
        </AnimateIn>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <AnimateIn key={study.slug} delay={index * 0.08}>
              <article className="group border-b border-ink/[0.08] pb-12 last:border-0">
                <p className="font-display text-xs tracking-widest uppercase text-ink/25 mb-3">
                  {study.industry[l]}
                </p>
                <h2 className="font-display font-extrabold text-display-lg mb-3">
                  <Link
                    href={{ pathname: '/referenzen/[slug]', params: { slug: study.slug } }}
                    className="hover:text-ink/60 transition-colors"
                  >
                    {study.title[l]}
                  </Link>
                </h2>
                <p className="text-ink/40 max-w-3xl mb-4">{study.subtitle[l]}</p>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span key={tech} className="text-[11px] font-display tracking-wide text-ink/25 uppercase bg-ink/[0.03] px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
