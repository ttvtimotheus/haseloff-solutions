'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function CtaBanner() {
  const t = useTranslations('ctaBanner');
  const tCta = useTranslations('cta');

  return (
    <section className="py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full gradient-blob opacity-25" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <AnimateIn>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-display-xl text-ink mb-6">
              {t('title')}
            </h2>
            <p className="text-ink/35 text-lg sm:text-xl mb-12 max-w-xl mx-auto">
              {t('subtitle')}
            </p>
            <motion.button
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-ink text-cream px-10 py-5 rounded-full font-display font-bold text-base inline-flex items-center gap-3"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {tCta('primary')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </motion.button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
