'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems = [
    { id: 'duration' },
    { id: 'cost' },
    { id: 'technologies' },
    { id: 'maintenance' },
    { id: 'process' },
    { id: 'support' },
  ];

  return (
    <section id="faq" aria-label="FAQ" className="section-dark py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <p className="font-display text-sm tracking-widest uppercase text-cream/25 mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-cream mb-20 sm:mb-28">
            {t('title')}
          </h2>
        </AnimateIn>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => {
            const isOpen = openItem === item.id;
            return (
              <AnimateIn key={item.id} delay={index * 0.05}>
                <div className="border-b border-cream/[0.06]">
                  <button
                    onClick={() => setOpenItem(isOpen ? null : item.id)}
                    className="w-full text-left py-6 sm:py-7 focus:outline-none group flex items-center justify-between gap-6"
                    aria-expanded={isOpen}
                  >
                    <h3 className={cn(
                      'font-display font-semibold text-base sm:text-lg transition-colors duration-300',
                      isOpen ? 'text-cream' : 'text-cream/50 group-hover:text-cream/80'
                    )}>
                      {t(`items.${item.id}.question` as any)}
                    </h3>
                    <motion.span
                      className="text-cream/25 text-xl font-light shrink-0"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-cream/35 leading-relaxed max-w-2xl text-sm sm:text-base">
                          {t(`items.${item.id}.answer` as any)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
