'use client';

import { useTranslations } from 'next-intl';
import { staggerDelay } from '@/lib/utils';

import PixelCard from './PixelCard';

export default function Philosophy() {
  const t = useTranslations('philosophy');

  const values = [
    {
      id: 'clarity',
      color: 'text-secondary',
      icon: '◆',
    },
    {
      id: 'quality',
      color: 'text-accent',
      icon: '■',
    },
    {
      id: 'responsibility',
      color: 'text-primary',
      icon: '▲',
    },
  ];

  return (
    <section id="philosophie" className="py-20 relative overflow-hidden">
      {/* Pixel-Highlights im Hintergrund */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-secondary rounded-pixel-sm animate-pulse opacity-20" />
      <div className="absolute bottom-20 right-16 w-3 h-3 bg-accent rounded-pixel animate-pulse opacity-15" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 right-8 w-2 h-2 bg-primary rounded-pixel-sm animate-pulse opacity-25" style={{animationDelay: '1.5s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
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
              className="animate-stagger-in opacity-0"
              style={staggerDelay(index)}
            >
              <PixelCard className="h-full flex flex-col items-center text-center hover:shadow-pixel-hover transition-all duration-200">
                {/* Icon Block */}
                <div className="mb-6 relative">
                  <div className={`text-6xl ${value.color} opacity-20 absolute top-1 left-1 select-none`}>
                    {value.icon}
                  </div>
                  <div className={`text-6xl ${value.color} relative z-10`}>
                    {value.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl mb-3">
                  {t(`${value.id}.title`)}
                </h3>
                
                <p className="text-gray-700 font-medium">
                  {t(`${value.id}.description`)}
                </p>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
