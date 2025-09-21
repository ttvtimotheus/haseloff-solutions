'use client';

import { useTranslations, useLocale } from 'next-intl';
import PixelCard from './PixelCard';
import { projects } from '@/lib/projects';
import { staggerDelay } from '@/lib/utils';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();

  return (
    <section id="projekte" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PixelCard
              key={project.id}
              missingCorner={index % 2 === 0 ? 'top-right' : 'bottom-left'}
              hover
              className="animate-stagger-in opacity-0"
              style={staggerDelay(index)}
            >
              <h3 className="font-display font-bold text-xl mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {locale === 'de' ? project.description : project.descriptionEn}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface text-xs font-display font-medium rounded-pixel-sm border border-border"
                  >
                    {t(`tags.${tag}`)}
                  </span>
                ))}
              </div>

              <details className="group">
                <summary className="cursor-pointer font-display font-medium text-sm text-secondary hover:text-secondary-dark transition-colors list-none flex items-center gap-2">
                  <span className="inline-block w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-secondary group-open:rotate-180 transition-transform" />
                  {t('techStack')}
                </summary>
                <div className="mt-2 pt-2 border-t border-border flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary text-white text-xs rounded-pixel-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </details>

              {(project.link || project.github) && (
                <div className="mt-4 pt-4 border-t border-border flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-display font-medium text-secondary hover:text-secondary-dark transition-colors"
                    >
                      {t('viewProject')} →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-display font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              )}
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
