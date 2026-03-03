'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';
import { projects } from '@/lib/projects';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();

  return (
    <section id="projekte" className="section-dark py-32 sm:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <AnimateIn>
              <p className="font-display text-sm tracking-widest uppercase text-cream/25 mb-4">
                {t('subtitle')}
              </p>
              <h2 className="font-display font-extrabold text-display-xl text-cream mb-6">
                {t('title')}
              </h2>
              <p className="text-cream/25 text-sm leading-relaxed hidden lg:block">
                {t('projectsIntro')}
              </p>
            </AnimateIn>
          </div>

          <div className="lg:col-span-8">
            {projects.map((project, index) => (
              <AnimateIn key={project.id} delay={index * 0.06}>
                <motion.div
                  className="group border-b border-cream/[0.06] py-8 sm:py-10 first:pt-0 last:border-0 cursor-default"
                  whileHover="hover"
                >
                  <div className="flex items-baseline justify-between gap-6 mb-2">
                    <div className="flex items-baseline gap-5 min-w-0">
                      <span className="font-display text-xs text-cream/15 tabular-nums shrink-0 tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <motion.h3
                        className="font-display font-bold text-lg sm:text-2xl text-cream/40 transition-colors duration-500 truncate"
                        variants={{ hover: { color: '#f5f5f0' } }}
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                    <motion.svg
                      className="w-4 h-4 text-cream/0 shrink-0 hidden sm:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      variants={{ hover: { color: 'rgba(245,245,240,0.3)', x: 3 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </motion.svg>
                  </div>
                  <motion.p
                    className="text-cream/0 text-sm leading-relaxed max-w-lg ml-9 sm:ml-10 transition-all duration-500"
                    variants={{ hover: { color: 'rgba(245,245,240,0.3)' } }}
                  >
                    {locale === 'de' ? project.description : project.descriptionEn}
                  </motion.p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 ml-9 sm:ml-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-display tracking-wide text-cream/15 uppercase">
                        {t(`tags.${tag}` as any)}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
