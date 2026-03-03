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
            <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,4rem)] text-cream max-w-10xl leading-[1.05]">
              Haseloff Software Solutions
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-cream/20 mb-4">
                {t('nav.kontakt')}
              </h4>
              <div className="space-y-2 text-sm">
                <a href="mailto:kontakt@haseloff-solutions.de" className="block text-cream/30 hover:text-cream transition-colors duration-300">
                  kontakt@haseloff-solutions.de
                </a>
                <a href="tel:+4915258705975" className="block text-cream/30 hover:text-cream transition-colors duration-300">
                  +49 1525 870 5975
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-cream/20 mb-4">
                Navigation
              </h4>
              <div className="space-y-2 text-sm">
                {['projekte', 'leistungen', 'philosophie', 'faq'].map((id) => (
                  <button
                    key={id}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-cream/30 hover:text-cream transition-colors duration-300"
                  >
                    {t(`nav.${id}` as any)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-xs tracking-widest uppercase text-cream/20 mb-4">
                Legal
              </h4>
              <div className="space-y-2 text-sm">
                <Link href="/impressum" className="block text-cream/30 hover:text-cream transition-colors duration-300">
                  {t('nav.impressum')}
                </Link>
                <Link href="/datenschutz" className="block text-cream/30 hover:text-cream transition-colors duration-300">
                  {t('nav.datenschutz')}
                </Link>
              </div>
            </div>

            <div>
              <p className="text-cream/15 text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>
          </div>
        </AnimateIn>

        <div className="pt-8 border-t border-cream/[0.04]">
          <p className="text-[11px] text-cream/15 tracking-wide">
            &copy; {new Date().getFullYear()} {t('footer.company')}
          </p>
        </div>
      </div>
    </footer>
  );
}
