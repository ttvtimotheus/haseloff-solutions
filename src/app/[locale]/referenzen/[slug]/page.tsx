import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { caseStudies } from '@/content/case-studies';
import { blogArticles } from '@/content/blog';
import AnimateIn from '@/components/AnimateIn';
import Breadcrumbs from '@/components/Breadcrumbs';

const baseUrl = 'https://haseloff-software.de';

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
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
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  const localePath = isDe ? `referenzen/${slug}` : `case-studies/${slug}`;

  return {
    title: study.title[l],
    description: study.metaDescription[l],
    alternates: {
      canonical: `${baseUrl}/${locale}/${localePath}`,
      languages: {
        de: `${baseUrl}/de/referenzen/${slug}`,
        en: `${baseUrl}/en/case-studies/${slug}`,
        'x-default': `${baseUrl}/de/referenzen/${slug}`,
      },
    },
    openGraph: {
      title: `${study.title[l]} | Haseloff Software Solutions`,
      description: study.metaDescription[l],
      url: `${baseUrl}/${locale}/${localePath}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';
  const isDe = l === 'de';

  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const relatedBlogs = blogArticles.filter((a) => study.relatedBlogSlugs.includes(a.slug));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title[l],
    description: study.metaDescription[l],
    author: { '@type': 'Organization', name: 'Haseloff Software Solutions' },
    publisher: { '@type': 'Organization', name: 'Haseloff Software Solutions', url: baseUrl },
    mainEntityOfPage: `${baseUrl}/${locale}/${isDe ? 'referenzen' : 'case-studies'}/${slug}`,
  };

  const sections = [
    { id: 'problem', label: isDe ? 'Problem' : 'Problem', content: study.problem[l] },
    { id: 'challenge', label: isDe ? 'Herausforderung' : 'Challenge', content: study.challenge[l] },
    { id: 'solution', label: isDe ? 'Lösung' : 'Solution', content: study.solution[l] },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="py-32 sm:py-40" aria-label={study.title[l]}>
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: isDe ? 'Referenzen' : 'Case Studies', href: '/referenzen' },
              { label: study.title[l] },
            ]}
          />

          <AnimateIn>
            <header className="max-w-3xl mb-20">
              <p className="font-display text-sm tracking-widest uppercase text-ink/25 mb-4">
                {study.industry[l]}
              </p>
              <h1 className="font-display font-extrabold text-display-xl mb-6">{study.title[l]}</h1>
              <p className="text-lg text-ink/40 mb-6">{study.subtitle[l]}</p>
              <div className="flex flex-wrap gap-4 text-sm text-ink/30">
                <span>{isDe ? 'Kunde' : 'Client'}: {study.client}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{isDe ? 'Dauer' : 'Duration'}: {study.duration[l]}</span>
              </div>
            </header>
          </AnimateIn>

          <div className="max-w-3xl">
            {sections.map((section, index) => (
              <AnimateIn key={section.id} delay={index * 0.05}>
                <section id={section.id} className="mb-16">
                  <h2 className="font-display font-extrabold text-display-lg mb-6">{section.label}</h2>
                  <div className="space-y-4 text-ink/60 leading-relaxed">
                    {section.content.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            ))}

            <AnimateIn>
              <section id="results" className="mb-16">
                <h2 className="font-display font-extrabold text-display-lg mb-6">
                  {isDe ? 'Ergebnisse' : 'Results'}
                </h2>
                <ul className="space-y-3">
                  {study.results[l].map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/20 mt-2 shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </section>
            </AnimateIn>

            <AnimateIn>
              <section id="tech-stack" className="mb-16">
                <h2 className="font-display font-extrabold text-display-lg mb-6">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span key={tech} className="font-display text-sm tracking-wide bg-ink/[0.04] text-ink/50 px-4 py-2 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </AnimateIn>

            {relatedBlogs.length > 0 && (
              <AnimateIn>
                <section aria-label={isDe ? 'Verwandte Artikel' : 'Related articles'} className="mt-32 pt-16 border-t border-ink/10">
                  <h2 className="font-display font-extrabold text-display-lg mb-12">
                    {isDe ? 'Weiterlesen' : 'Related articles'}
                  </h2>
                  <div className="space-y-8">
                    {relatedBlogs.map((blog) => (
                      <article key={blog.slug}>
                        <h3 className="font-display text-xl mb-1">
                          <Link
                            href={{ pathname: '/blog/[slug]', params: { slug: blog.slug } }}
                            className="underline hover:text-ink/60 transition-colors"
                          >
                            {blog.title[l]}
                          </Link>
                        </h3>
                        <p className="text-ink/40 text-sm">{blog.subtitle[l]}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </AnimateIn>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
