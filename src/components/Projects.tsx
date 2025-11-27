'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import PixelCard from './PixelCard';
import PixelCardSkeleton from './PixelCardSkeleton';
import { projects } from '@/lib/projects';
import { staggerDelay } from '@/lib/utils';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Staggered reveal of projects
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 200);
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projekte" className="py-20 relative overflow-hidden">
      {/* Pixel-Highlights im Hintergrund */}
      <div className="absolute top-16 right-12 w-2 h-2 bg-accent rounded-pixel-sm animate-pulse opacity-20" />
      <div className="absolute bottom-24 left-8 w-3 h-3 bg-secondary rounded-pixel animate-pulse opacity-15" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 left-16 w-2 h-2 bg-primary rounded-pixel-sm animate-pulse opacity-25" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show skeleton cards while loading
            [...Array(6)].map((_, index) => (
              <PixelCardSkeleton
                key={`skeleton-${index}`}
                variant="project"
                className="opacity-0 animate-stagger-in"
                style={staggerDelay(index)}
              />
            ))
          ) : (
            projects.map((project, index) => (
              <PixelCard
                key={project.id}
                hover
                className={`transition-all duration-500 ${
                  visibleProjects.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
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
                <summary className="cursor-pointer font-display font-medium text-sm text-secondary hover:text-secondary-dark hover:translate-x-[1px] transition-all duration-200 list-none flex items-center gap-2">
                  <span className="inline-block w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-secondary group-open:rotate-180 transition-transform" />
                  {t('techStack')}
                </summary>
                <div className="mt-3 pt-3 border-t border-border flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-white text-xs font-display font-medium rounded-pixel-sm shadow-pixel-sm hover:shadow-pixel hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200"
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
          )))}
        </div>
      </div>
    </section>
  );
}
