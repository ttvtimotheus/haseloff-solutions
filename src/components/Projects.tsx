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
        <AnimateIn>
          <p className="font-display text-sm tracking-widest uppercase text-cream/25 mb-4">
            {t('subtitle')}
          </p>
          <h2 className="font-display font-extrabold text-display-xl text-cream mb-20 sm:mb-28">
            {t('title')}
          </h2>
        </AnimateIn>

        <div>
          {projects.map((project, index) => (
            <AnimateIn key={project.id} delay={index * 0.06}>
              <motion.div
                className="group border-b border-cream/[0.06] py-8 sm:py-10 first:pt-0 last:border-0 cursor-default"
                whileHover="hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 sm:gap-8">
                  <div className="flex items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
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
                  <div className="flex flex-wrap gap-2 sm:shrink-0 pl-8 sm:pl-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-display tracking-wide text-cream/20 uppercase"
                      >
                        {t(`tags.${tag}` as any)}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.p
                  className="text-cream/0 text-sm leading-relaxed max-w-xl mt-2 pl-8 sm:pl-10 transition-all duration-500"
                  variants={{ hover: { color: 'rgba(245,245,240,0.35)' } }}
                >
                  {locale === 'de' ? project.description : project.descriptionEn}
                </motion.p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3 pl-8 sm:pl-10">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] text-cream/10 font-display">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
