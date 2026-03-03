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
    <section id="leistungen" aria-label="Services" className="py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24 sm:mb-32">
            <h2 className="font-display font-extrabold text-display-xl text-ink lg:col-span-7">
              {t('title')}
            </h2>
            <p className="text-ink/40 text-base sm:text-lg leading-relaxed lg:col-span-4 lg:col-start-9 lg:self-end">
              {t('subtitle')}
            </p>
          </div>
        </AnimateIn>

        <div>
          {services.map((service, index) => (
            <AnimateIn key={service.id} delay={index * 0.1}>
              <motion.div
                className="group border-t border-ink/[0.08] cursor-default"
                whileHover="hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-12 sm:py-16 items-baseline">
                  <span className="font-display text-xs text-ink/20 tracking-widest tabular-nums lg:col-span-1">
                    {service.number}
                  </span>
                  <motion.h3
                    className="font-display font-extrabold text-display-lg text-ink/15 transition-colors duration-500 lg:col-span-5"
                    variants={{ hover: { color: '#0a0a0a' } }}
                  >
                    {t(`${service.id}.title` as any)}
                  </motion.h3>
                  <motion.p
                    className="text-ink/0 leading-relaxed text-base transition-all duration-500 lg:col-span-5 lg:col-start-8"
                    variants={{ hover: { color: 'rgba(10,10,10,0.45)' } }}
                  >
                    {t(`${service.id}.description` as any)}
                  </motion.p>
                  <motion.div
                    className="hidden lg:flex lg:col-span-1 justify-end"
                    variants={{ hover: { x: 4, opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-ink/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
