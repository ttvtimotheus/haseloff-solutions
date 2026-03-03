'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import LangSwitch from './LangSwitch';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('nav');
  const tCta = useTranslations('cta');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { id: 'projekte', label: t('projekte') },
    { id: 'leistungen', label: t('leistungen') },
    { id: 'philosophie', label: t('philosophie') },
    { id: 'faq', label: t('faq') },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'glass-light' : 'bg-transparent',
          menuOpen && 'bg-cream'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/nur-logo-fuer-icon.svg"
                alt="Haseloff Software Solutions"
                width={32}
                height={32}
                priority
                className="w-8 h-8"
              />
            </Link>

            <div className="flex items-center gap-3">
              <LangSwitch />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink/5 transition-colors relative"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <div className="w-3.5 h-2.5 flex flex-col justify-between">
                  <span className={cn('block h-[1.5px] bg-ink rounded-full transition-all duration-300 origin-center', menuOpen && 'rotate-45 translate-y-[4.5px]')} />
                  <span className={cn('block h-[1.5px] bg-ink rounded-full transition-all duration-300', menuOpen && 'opacity-0 scale-0')} />
                  <span className={cn('block h-[1.5px] bg-ink rounded-full transition-all duration-300 origin-center', menuOpen && '-rotate-45 -translate-y-[4.5px]')} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 sm:px-6">
              <nav className="space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setTimeout(() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }, 350);
                      }}
                      className="block font-display font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] text-ink/20 hover:text-ink transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: navItems.length * 0.05 }}
                >
                  <Link
                    href="/kontakt"
                    onClick={() => setMenuOpen(false)}
                    className="block font-display font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] text-ink/20 hover:text-ink transition-colors duration-300"
                  >
                    {t('kontakt')}
                  </Link>
                </motion.div>
              </nav>

              <motion.div
                className="mt-16 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a href="mailto:kontakt@haseloff-solutions.de" className="hover:text-ink transition-colors">
                  kontakt@haseloff-solutions.de
                </a>
                <a href="tel:+4915258705975" className="hover:text-ink transition-colors">
                  +49 1525 870 5975
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 bg-ink text-cream px-5 py-3 rounded-full font-display font-bold text-sm shadow-lg flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {tCta('primary')}
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </motion.button>
    </>
  );
}
