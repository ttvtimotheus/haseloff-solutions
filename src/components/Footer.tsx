'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import SectionLink from './ProjectsLink';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary text-white mt-24 relative overflow-hidden" role="contentinfo">
      {/* Pixel-Highlights removed */}
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Zentrierter Claim */}
        <div className="text-center py-8 mb-16">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl">
            {t('hero.title')}{' '}
            <span className="text-accent">{t('hero.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-medium text-base mb-5 text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <SectionLink sectionId="projekte" className="text-sm text-gray-400 hover:text-accent hover:translate-x-[1px] transition-all duration-200">
                  {t('nav.projekte')}
                </SectionLink>
              </li>
              <li>
                <SectionLink sectionId="leistungen" className="text-sm text-gray-400 hover:text-accent hover:translate-x-[1px] transition-all duration-200">
                  {t('nav.leistungen')}
                </SectionLink>
              </li>
              <li>
                <SectionLink sectionId="philosophie" className="text-sm text-gray-400 hover:text-accent hover:translate-x-[1px] transition-all duration-200">
                  {t('nav.philosophie')}
                </SectionLink>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-gray-400 hover:text-accent hover:translate-x-[1px] transition-all duration-200">
                  {t('nav.kontakt')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:pl-6 relative">
            <div className="hidden md:block absolute left-0 top-2 bottom-8 w-px bg-gray-600"></div>
            <h3 className="font-display font-medium text-base mb-5 text-gray-200">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-sm text-gray-400 hover:text-secondary hover:translate-x-[1px] transition-all duration-200">
                  {t('nav.impressum')}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-gray-400 hover:text-secondary hover:translate-x-[1px] transition-all duration-200">
                  {t('nav.datenschutz')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            {t('footer.madeWith')} Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
