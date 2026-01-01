'use client';

import { useTranslations } from 'next-intl';
import PixelButton from './PixelButton';
import GridBackground from './GridBackground';
import Typewriter from './Typewriter';

export default function Hero() {
  const t = useTranslations('hero');
  const tCta = useTranslations('cta');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            <span className="block">{t('title')}</span>
            <span className="block text-secondary mt-2">{t('titleHighlight')}</span>
          </h1>
          
          <div className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto min-h-[3em]">
            <Typewriter 
              text={t('subtitle')} 
              startDelay={800}
              delay={30}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '2500ms'}}>
            <div className="flex flex-col items-center">
              <PixelButton 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tCta('primary')}
              </PixelButton>
              {/* Response Time Hint */}
              <div className="flex items-center gap-2 mt-3 animate-fade-in" style={{animationDelay: '600ms'}}>
                <span className="text-xs font-display font-medium text-gray-600">
                  {tCta('responseHint')}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <PixelButton 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('projekte')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tCta('secondary')}
              </PixelButton>
            </div>
          </div>
        </div>
        
        {/* Decorative pixel elements removed */}
      </div>
    </section>
  );
}
