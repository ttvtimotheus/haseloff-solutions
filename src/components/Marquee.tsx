'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Marquee() {
  const t = useTranslations('marquee');

  const items: string[] = [];
  for (let i = 0; i < 8; i++) {
    items.push(t(`items.${i}` as any));
  }

  const repeated = [...items, ...items];

  return (
    <div className="border-y border-ink/[0.06] py-5 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-sm tracking-widest uppercase text-ink/20">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/10 shrink-0" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
