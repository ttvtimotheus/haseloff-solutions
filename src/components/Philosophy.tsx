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
    <section id="philosophie" className="py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateIn>
          <p className="font-display text-sm tracking-widest uppercase text-ink/30 mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-ink mb-20 sm:mb-28">
            {t('title')}
          </h2>
        </AnimateIn>

        <div className="max-w-5xl mx-auto space-y-0">
          {values.map((value, index) => (
            <AnimateIn key={value.id} delay={index * 0.1}>
              <div className="group py-10 sm:py-14 border-b border-ink/[0.08] last:border-0 flex flex-col sm:flex-row gap-4 sm:gap-12">
                <span className="font-display text-xs text-ink/20 tracking-widest tabular-nums shrink-0">
                  {value.number}
                </span>
                <div className="flex-1">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-4">
                    {t(`${value.id}.title`)}
                  </h3>
                  <p className="text-ink/40 leading-relaxed max-w-xl text-base">
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
