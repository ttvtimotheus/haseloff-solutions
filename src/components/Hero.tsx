'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden pb-16 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-15%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full gradient-blob animate-float opacity-50" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full gradient-blob animate-float-reverse opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h1
          className="font-display font-extrabold text-hero mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-ink">{t('title')}</span>
          <span className="block text-ink/20">{t('titleHighlight')}</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-ink/40 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('subtitle')}
        </motion.p>
      </div>
    </section>
  );
}
