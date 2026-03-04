import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { blogArticles } from '@/content/blog';
import AnimateIn from '@/components/AnimateIn';

const baseUrl = 'https://haseloff-software.de';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const l = locale as 'de' | 'en';

  const description =
    l === 'de'
      ? 'Insights, Tutorials und Perspektiven rund um Softwareentwicklung, Webdesign und digitale Produkte.'
      : 'Insights, tutorials, and perspectives on software development, web design, and digital products.';

  return {
    title: 'Blog',
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        de: `${baseUrl}/de/blog`,
        en: `${baseUrl}/en/blog`,
        'x-default': `${baseUrl}/de/blog`,
      },
    },
    openGraph: {
      title: 'Blog | Haseloff Software Solutions',
      description,
      url: `${baseUrl}/${locale}/blog`,
      siteName: 'Haseloff Software Solutions',
      locale: l === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const l = locale as 'de' | 'en';

  return (
    <section
      className="py-32 sm:py-40"
      aria-label={l === 'de' ? 'Blog-Artikel' : 'Blog articles'}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <h1 className="font-display text-display-xl mb-6">Blog</h1>
          <p className="text-lg text-ink/40 max-w-2xl mb-20">
            {l === 'de'
              ? 'Gedanken, Erkenntnisse und Perspektiven aus unserer Arbeit.'
              : 'Thoughts, insights, and perspectives from our work.'}
          </p>
        </AnimateIn>

        <div className="space-y-16">
          {blogArticles.map((article, index) => (
            <AnimateIn key={article.slug} delay={index * 0.05}>
              <article className="group">
                <time
                  dateTime={article.publishDate}
                  className="text-sm text-ink/30 font-display"
                >
                  {new Date(article.publishDate).toLocaleDateString(
                    l === 'de' ? 'de-DE' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' },
                  )}
                </time>
                <h2 className="font-display text-display-lg mt-2 mb-3">
                  <Link
                    href={{
                      pathname: '/blog/[slug]',
                      params: { slug: article.slug },
                    }}
                    className="hover:text-ink/60 transition-colors"
                  >
                    {article.title[l]}
                  </Link>
                </h2>
                <p className="text-ink/40 max-w-3xl mb-2">
                  {article.subtitle[l]}
                </p>
                <span className="text-sm text-ink/25">
                  {article.readingTime[l]}
                </span>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
