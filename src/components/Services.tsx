'use client';

import { useTranslations } from 'next-intl';
import PixelCard from './PixelCard';
import { staggerDelay } from '@/lib/utils';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      id: 'web',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
          />
        </svg>
      ),
    },
    {
      id: 'app',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
          />
        </svg>
      ),
    },
    {
      id: 'custom',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                {t(`${service.id}.title`)}
              </h3>
              
              <p className="text-gray-600">
                {t(`${service.id}.description`)}
              </p>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
