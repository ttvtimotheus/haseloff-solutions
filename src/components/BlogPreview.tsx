'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { blogArticles } from '@/content/blog';
import AnimateIn from './AnimateIn';

const PREVIEW_COUNT = 3;

export default function BlogPreview() {
  const t = useTranslations('blogPreview');
  const locale = useLocale() as 'de' | 'en';
  const preview = blogArticles.slice(0, PREVIEW_COUNT);

  return (
    <section aria-label={t('title')} className="py-32 sm:py-40 border-b border-ink/[0.06]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <AnimateIn className="lg:col-span-5">
            <h2 className="font-display font-extrabold text-display-xl text-ink mb-4">
              {t('title')}
            </h2>
            <p className="text-ink/40 text-base sm:text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </AnimateIn>
          <AnimateIn className="lg:col-span-6 lg:col-start-7 flex items-end justify-end">
            <Link
              href="/blog"
              className="font-display font-bold text-sm text-ink/40 hover:text-ink transition-colors inline-flex items-center gap-2"
            >
              {t('allArticles')}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {preview.map((article, index) => (
            <AnimateIn key={article.slug} delay={index * 0.08}>
              <article className="group">
                <time
                  dateTime={article.publishDate}
                  className="text-xs font-display tracking-widest uppercase text-ink/25"
                >
                  {new Date(article.publishDate).toLocaleDateString(
                    locale === 'de' ? 'de-DE' : 'en-US',
                    { year: 'numeric', month: 'short', day: 'numeric' },
                  )}
                </time>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink mt-2 mb-2 group-hover:text-ink/80 transition-colors">
                  <Link
                    href={{ pathname: '/blog/[slug]', params: { slug: article.slug } }}
                    className="block"
                  >
                    {article.title[locale]}
                  </Link>
                </h3>
                <p className="text-ink/40 text-sm leading-relaxed line-clamp-2 mb-3">
                  {article.subtitle[locale]}
                </p>
                <span className="text-xs text-ink/25">{article.readingTime[locale]}</span>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
