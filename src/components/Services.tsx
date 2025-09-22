'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import PixelCard from './PixelCard';
import PixelCardSkeleton from './PixelCardSkeleton';
import { staggerDelay } from '@/lib/utils';

export default function Services() {
  const t = useTranslations('services');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 'web',
      accent: 'Web',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="8" y="21" width="8" height="1" fill="currentColor"/>
          <rect x="12" y="17" width="1" height="4" fill="currentColor"/>
          <rect x="5" y="6" width="3" height="1" fill="currentColor"/>
          <rect x="5" y="8" width="5" height="1" fill="currentColor"/>
          <rect x="5" y="10" width="4" height="1" fill="currentColor"/>
          <rect x="13" y="6" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
    },
    {
      id: 'app',
      accent: 'App',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="9" y="5" width="2" height="1" fill="currentColor"/>
          <rect x="13" y="5" width="2" height="1" fill="currentColor"/>
          <rect x="8" y="8" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="10" y="10" width="1" height="1" fill="currentColor"/>
          <rect x="13" y="10" width="1" height="1" fill="currentColor"/>
          <rect x="10" y="13" width="1" height="1" fill="currentColor"/>
          <rect x="13" y="13" width="1" height="1" fill="currentColor"/>
          <rect x="10" y="19" width="4" height="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: 'custom',
      accent: 'Custom',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="5" y="5" width="1" height="1" fill="currentColor"/>
          <rect x="7" y="5" width="3" height="1" fill="currentColor"/>
          <rect x="12" y="5" width="2" height="1" fill="currentColor"/>
          <rect x="5" y="7" width="4" height="1" fill="currentColor"/>
          <rect x="11" y="7" width="6" height="1" fill="currentColor"/>
          <rect x="5" y="9" width="2" height="1" fill="currentColor"/>
          <rect x="9" y="9" width="5" height="1" fill="currentColor"/>
          <rect x="5" y="11" width="8" height="1" fill="currentColor"/>
          <rect x="15" y="11" width="2" height="1" fill="currentColor"/>
          <rect x="2" y="20" width="4" height="2" fill="currentColor"/>
          <rect x="8" y="20" width="4" height="2" fill="currentColor"/>
          <rect x="14" y="20" width="4" height="2" fill="currentColor"/>
          <rect x="20" y="20" width="2" height="2" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-surface relative overflow-hidden">
      {/* Pixel-Highlights im Hintergrund */}
      <div className="absolute top-12 left-12 w-3 h-3 bg-accent rounded-pixel-sm animate-pulse opacity-20" />
      <div className="absolute bottom-16 right-14 w-4 h-4 bg-secondary rounded-pixel animate-pulse opacity-15" style={{animationDelay: '1s'}} />
      <div className="absolute top-2/3 right-12 w-2 h-2 bg-primary rounded-pixel-sm animate-pulse opacity-25" style={{animationDelay: '1.5s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            [...Array(3)].map((_, index) => (
              <PixelCardSkeleton
                key={`service-skeleton-${index}`}
                variant="service"
                className="animate-stagger-in opacity-0"
                style={staggerDelay(index)}
              />
            ))
          ) : (
            services.map((service, index) => (
              <PixelCard
                key={service.id}
                missingCorner={index === 1 ? 'bottom-right' : 'top-right'}
                className="animate-stagger-in opacity-0"
                style={staggerDelay(index)}
              >
              <div className="flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-pixel mb-4">
                {service.icon}
              </div>
              
              <h3 className="font-display font-bold text-xl mb-3">
                <span className="text-accent">{service.accent}</span>{' '}
                <span>{t(`${service.id}.title`).replace(service.accent, '').trim()}</span>
              </h3>
              
              <p className="text-gray-600">
                {t(`${service.id}.description`)}
              </p>
            </PixelCard>
          )))}
        </div>
      </div>
    </section>
  );
}
