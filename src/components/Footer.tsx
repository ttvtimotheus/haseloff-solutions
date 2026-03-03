'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import AnimateIn from './AnimateIn';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="section-dark py-20 sm:py-28" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <div className="mb-20 sm:mb-28">
            <h2 className="font-display font-extrabold text-display-xl text-cream/15 max-w-4xl">
              Haseloff Software Solutions
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-16">
            <div className="space-y-1 text-sm">
              <a href="mailto:kontakt@haseloff-solutions.de" className="block text-cream/30 hover:text-cream transition-colors duration-300">
                kontakt@haseloff-solutions.de
              </a>
              <a href="tel:+4915258705975" className="block text-cream/30 hover:text-cream transition-colors duration-300">
                +49 1525 870 5975
              </a>
            </div>
            <p className="text-cream/15 text-sm max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>
        </AnimateIn>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cream/[0.04]">
          <p className="text-[11px] text-cream/15 tracking-wide">
            &copy; {new Date().getFullYear()} {t('footer.company')}
          </p>
          <div className="flex gap-6 text-[11px] text-cream/15 tracking-wide">
            <Link href="/impressum" className="hover:text-cream/40 transition-colors duration-300">
              {t('nav.impressum')}
            </Link>
            <Link href="/datenschutz" className="hover:text-cream/40 transition-colors duration-300">
              {t('nav.datenschutz')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
