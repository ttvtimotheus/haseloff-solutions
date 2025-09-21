'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary text-white mt-24" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Image
                  src="/nur-logo-fuer-icon.svg"
                  alt="Haseloff Software Solutions Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 filter brightness-0 invert"
                />
              </div>
              <span className="font-display font-bold text-lg">
                {t('footer.company')}
              </span>
            </div>
            <p className="text-sm text-gray-300">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#projekte" className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t('nav.projekte')}
                </Link>
              </li>
              <li>
                <Link href="/#leistungen" className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t('nav.leistungen')}
                </Link>
              </li>
              <li>
                <Link href="/#philosophie" className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t('nav.philosophie')}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t('nav.kontakt')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t('nav.impressum')}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-gray-300 hover:text-accent transition-colors">
                  {t('nav.datenschutz')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            {t('footer.madeWith')} 
            <span className="inline-block w-4 h-4 bg-accent rounded-pixel-sm animate-pulse"></span>
            Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
