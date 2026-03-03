'use client';

import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

export default function Philosophy() {
  const t = useTranslations('philosophy');

  const values = [
    { id: 'clarity' as const, number: '01' },
    { id: 'quality' as const, number: '02' },
    { id: 'responsibility' as const, number: '03' },
  ];

  return (
    <section id="philosophie" aria-label="Philosophy" className="section-dark py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <p className="font-display text-sm tracking-widest uppercase text-cream/25 mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-cream mb-20 sm:mb-28">
            {t('title')}
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/[0.06] rounded-2xl overflow-hidden">
          {values.map((value, index) => (
            <AnimateIn key={value.id} delay={index * 0.12}>
              <div className="bg-ink p-8 sm:p-12 h-full flex flex-col relative group">
                <span className="font-display text-[6rem] sm:text-[8rem] font-extrabold text-cream/[0.03] absolute top-2 right-4 leading-none select-none pointer-events-none">
                  {value.number}
                </span>
                <div className="relative z-10">
                  <span className="font-display text-xs text-cream/20 tracking-widest mb-6 block">
                    {value.number}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-cream mb-5">
                    {t(`${value.id}.title`)}
                  </h3>
                  <p className="text-cream/35 leading-relaxed text-sm sm:text-base">
                    {t(`${value.id}.description`)}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
