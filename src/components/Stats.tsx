'use client';

import { useTranslations } from 'next-intl';
import AnimateIn from './AnimateIn';

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { id: 'projects' },
    { id: 'experience' },
    { id: 'clients' },
    { id: 'response' },
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-ink/[0.06]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <AnimateIn key={stat.id} delay={index * 0.1}>
              <div className="text-center lg:text-left">
                <div className="font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight text-ink mb-2">
                  {t(`${stat.id}.number` as any)}
                </div>
                <div className="font-display text-xs tracking-widest uppercase text-ink/30">
                  {t(`${stat.id}.label` as any)}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
