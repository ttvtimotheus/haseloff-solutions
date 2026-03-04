import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { blogArticles } from '@/content/blog';
import AnimateIn from '@/components/AnimateIn';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';

const baseUrl = 'https://haseloff-software.de';

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const l = locale as 'de' | 'en';

  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title[l],
    description: article.metaDescription[l],
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
      languages: {
        de: `${baseUrl}/de/blog/${slug}`,
        en: `${baseUrl}/en/blog/${slug}`,
        'x-default': `${baseUrl}/de/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${article.title[l]} | Haseloff Software Solutions`,
      description: article.metaDescription[l],
      url: `${baseUrl}/${locale}/blog/${slug}`,
      siteName: 'Haseloff Software Solutions',
      locale: l === 'de' ? 'de_DE' : 'en_US',
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const l = locale as 'de' | 'en';

  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedArticles = blogArticles.filter((a) =>
    article.relatedSlugs.includes(a.slug),
  );

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title[l],
    description: article.metaDescription[l],
    author: { '@type': 'Person', name: article.author },
    datePublished: article.publishDate,
    publisher: {
      '@type': 'Organization',
      name: 'Haseloff Software Solutions',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/${locale}/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      <section className="py-32 sm:py-40" aria-label={article.title[l]}>
        <div className="container mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: article.title[l] },
            ]}
          />

          <AnimateIn>
            <header className="max-w-3xl mb-16">
              <h1 className="font-display text-display-xl mb-6">
                {article.title[l]}
              </h1>
              <p className="text-lg text-ink/40 mb-8">{article.subtitle[l]}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-ink/30">
                <address className="not-italic">{article.author}</address>
                <span aria-hidden="true">&middot;</span>
                <time dateTime={article.publishDate}>
                  {new Date(article.publishDate).toLocaleDateString(
                    l === 'de' ? 'de-DE' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' },
                  )}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{article.readingTime[l]}</span>
              </div>
            </header>
          </AnimateIn>

          <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-16">
            <article>
              {article.sections.map((section, index) => (
                <AnimateIn key={section.id} delay={index * 0.03}>
                  <section id={section.id} className="mb-16">
                    <h2 className="font-display text-display-lg mb-6">
                      {section.heading[l]}
                    </h2>
                    <div className="space-y-4 text-ink/60 leading-relaxed">
                      {section.content[l]
                        .split('\n\n')
                        .map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                  </section>
                </AnimateIn>
              ))}

              <AnimateIn>
                <section id="conclusion" className="mb-16">
                  <h2 className="font-display text-display-lg mb-6">
                    {l === 'de' ? 'Fazit' : 'Conclusion'}
                  </h2>
                  <div className="space-y-4 text-ink/60 leading-relaxed">
                    {article.conclusion[l]
                      .split('\n\n')
                      .map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                  </div>
                </section>
              </AnimateIn>
            </article>

            <aside className="hidden lg:block">
              <TableOfContents
                items={[
                  ...article.sections.map((s) => ({
                    id: s.id,
                    label: s.heading[l],
                  })),
                  {
                    id: 'conclusion',
                    label: l === 'de' ? 'Fazit' : 'Conclusion',
                  },
                ]}
              />
            </aside>
          </div>

          {relatedArticles.length > 0 && (
            <AnimateIn>
              <section
                aria-label={
                  l === 'de' ? 'Verwandte Artikel' : 'Related articles'
                }
                className="mt-32 pt-16 border-t border-ink/10"
              >
                <h2 className="font-display text-display-lg mb-12">
                  {l === 'de' ? 'Weiterlesen' : 'Read more'}
                </h2>
                <div className="space-y-8">
                  {relatedArticles.map((related) => (
                    <article key={related.slug}>
                      <h3 className="font-display text-xl mb-1">
                        <Link
                          href={{
                            pathname: '/blog/[slug]',
                            params: { slug: related.slug },
                          }}
                          className="underline hover:text-ink/60 transition-colors"
                        >
                          {related.title[l]}
                        </Link>
                      </h3>
                      <p className="text-ink/40 text-sm">
                        {related.subtitle[l]}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </AnimateIn>
          )}
        </div>
      </section>
    </>
  );
}
