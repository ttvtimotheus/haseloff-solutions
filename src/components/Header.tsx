'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import LangSwitch from './LangSwitch';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/#projekte', label: t('projekte') },
    { href: '/#leistungen', label: t('leistungen') },
    { href: '/#philosophie', label: t('philosophie') },
    { href: '/kontakt', label: t('kontakt') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-pixel' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-transform">
              <Image
                src="/nur-logo-fuer-icon.svg"
                alt="Haseloff Software Solutions Logo"
                width={40}
                height={40}
                priority
                className="w-10 h-10"
              />
            </div>
            <span className="hidden sm:block font-display font-bold text-lg">
              Haseloff Software Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display font-medium hover:text-secondary transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LangSwitch />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-pixel border-2 border-primary"
            aria-label="Menü öffnen"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={cn(
                'block h-[2px] bg-primary transition-all',
                isMobileMenuOpen && 'rotate-45 translate-y-[9px]'
              )} />
              <span className={cn(
                'block h-[2px] bg-primary transition-all',
                isMobileMenuOpen && 'opacity-0'
              )} />
              <span className={cn(
                'block h-[2px] bg-primary transition-all',
                isMobileMenuOpen && '-rotate-45 -translate-y-[9px]'
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        )}>
          <ul className="flex flex-col gap-4 pb-4 border-t-2 border-primary pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display font-medium hover:text-secondary transition-colors block py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <LangSwitch />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
