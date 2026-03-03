'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    { id: 'web', number: '01' },
    { id: 'app', number: '02' },
    { id: 'custom', number: '03' },
  ];

  return (
    <section id="leistungen" className="py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <p className="font-display text-sm tracking-widest uppercase text-ink/30 mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-ink mb-20 sm:mb-28">
            {t('title')}
          </h2>
        </AnimateIn>

        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimateIn key={service.id} delay={index * 0.1}>
              <motion.div
                className="group py-10 sm:py-14 border-b border-ink/[0.08] last:border-0 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 cursor-default"
                whileHover="hover"
              >
                <span className="font-display text-xs text-ink/20 tracking-widest tabular-nums shrink-0">
                  {service.number}
                </span>
                <div className="flex-1">
                  <motion.h3
                    className="font-display font-extrabold text-display-lg text-ink/15 transition-colors duration-500"
                    variants={{ hover: { color: '#0a0a0a' } }}
                  >
                    {t(`${service.id}.title` as any)}
                  </motion.h3>
                  <motion.p
                    className="text-ink/0 max-w-xl leading-relaxed mt-3 text-base transition-all duration-500"
                    variants={{ hover: { color: 'rgba(10,10,10,0.45)' } }}
                  >
                    {t(`${service.id}.description` as any)}
                  </motion.p>
                </div>
                <motion.div
                  className="hidden sm:block"
                  variants={{ hover: { x: 4 } }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-ink/0 group-hover:text-ink/30 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </motion.div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
