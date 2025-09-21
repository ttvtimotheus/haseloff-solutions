'use client';

import { useTranslations } from 'next-intl';
import { staggerDelay } from '@/lib/utils';

export default function Philosophy() {
  const t = useTranslations('philosophy');

  const values = [
    {
      id: 'clarity',
      color: 'bg-secondary',
      icon: '◆',
    },
    {
      id: 'quality',
      color: 'bg-accent',
      icon: '■',
    },
    {
      id: 'responsibility',
      color: 'bg-primary',
      icon: '▲',
    },
  ];

  return (
    <section id="philosophie" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="text-center animate-stagger-in opacity-0"
              style={staggerDelay(index)}
            >
              {/* Pillar */}
              <div className="relative mx-auto w-24 h-48 mb-6">
                <div className={`absolute inset-0 ${value.color} rounded-pixel`}>
                  {/* Missing pixel at top */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-background" />
                </div>
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                  {value.icon}
                </div>
                
                {/* Animated pulse */}
                <div 
                  className={`absolute -inset-2 ${value.color} opacity-20 rounded-pixel animate-pulse`}
                  style={{ animationDelay: `${index * 500}ms` }}
                />
              </div>

              <h3 className="font-display font-bold text-xl mb-3">
                {t(`${value.id}.title`)}
              </h3>
              
              <p className="text-gray-600 max-w-sm mx-auto">
                {t(`${value.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
