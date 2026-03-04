import { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { servicePages } from '@/content/services-data';
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
    title: isDe ? 'Leistungen' : 'Services',
    description: isDe
      ? 'Web-Apps, Mobile Apps, individuelle Systeme und Geschäftsprozess-Automatisierung. Alle Leistungen von Haseloff Software Solutions im Überblick.'
      : 'Web apps, mobile apps, custom systems, and business process automation. All services from Haseloff Software Solutions at a glance.',
    alternates: {
      canonical: isDe ? `${baseUrl}/de/leistungen` : `${baseUrl}/en/services`,
      languages: {
        de: `${baseUrl}/de/leistungen`,
        en: `${baseUrl}/en/services`,
        'x-default': `${baseUrl}/de/leistungen`,
      },
    },
    openGraph: {
      title: isDe ? 'Leistungen | Haseloff Software Solutions' : 'Services | Haseloff Software Solutions',
      url: isDe ? `${baseUrl}/de/leistungen` : `${baseUrl}/en/services`,
      type: 'website',
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const l = locale as 'de' | 'en';

  return (
    <section className="py-32 sm:py-40" aria-label={l === 'de' ? 'Leistungen' : 'Services'}>
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <h1 className="font-display font-extrabold text-display-xl mb-6">
            {l === 'de' ? 'Leistungen' : 'Services'}
          </h1>
          <p className="text-lg text-ink/40 max-w-2xl mb-20">
            {l === 'de'
              ? 'Drei Disziplinen, ein Ergebnis: Software, die dein Business nach vorne bringt.'
              : 'Three disciplines, one outcome: software that moves your business forward.'}
          </p>
        </AnimateIn>

        <div className="space-y-0">
          {servicePages.map((service, index) => (
            <AnimateIn key={service.slug} delay={index * 0.08}>
              <article className="group border-t border-ink/[0.08] py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                  <span className="font-display text-xs text-ink/20 tracking-widest tabular-nums lg:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="lg:col-span-5">
                    <h2 className="font-display font-extrabold text-display-lg mb-2">
                      <Link
                        href={{ pathname: '/leistungen/[slug]', params: { slug: service.slug } }}
                        className="hover:text-ink/60 transition-colors"
                      >
                        {service.title[l]}
                      </Link>
                    </h2>
                    <p className="text-ink/30 text-sm">{service.subtitle[l]}</p>
                  </div>
                  <div className="lg:col-span-5 lg:col-start-8">
                    <p className="text-ink/40 leading-relaxed">
                      {service.overview[l].split('\n\n')[0]?.slice(0, 200)}...
                    </p>
                  </div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
