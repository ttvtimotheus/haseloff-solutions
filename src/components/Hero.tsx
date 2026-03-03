'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pb-12 sm:pb-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-15%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full gradient-blob animate-float opacity-50" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full gradient-blob animate-float-reverse opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-9">
            <motion.h1
              className="font-display font-extrabold text-hero"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-ink">{t('title')}</span>
              <span className="block text-ink/20">{t('titleHighlight')}</span>
            </motion.h1>
          </div>

          <div className="lg:col-span-3 lg:pb-4">
            <motion.p
              className="text-sm sm:text-base text-ink/40 leading-relaxed max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border-[1.5px] border-ink/20 flex justify-center pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1.5 rounded-full bg-ink/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
