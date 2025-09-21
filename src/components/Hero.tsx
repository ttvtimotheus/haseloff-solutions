'use client';

import { useTranslations } from 'next-intl';
import PixelButton from './PixelButton';
import GridBackground from './GridBackground';

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
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '200ms'}}>
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '400ms'}}>
            <PixelButton 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {tCta('primary')}
            </PixelButton>
            <PixelButton 
              variant="secondary" 
              size="lg"
              pixelCorner="bottom-right"
              onClick={() => document.getElementById('projekte')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {tCta('secondary')}
            </PixelButton>
          </div>
        </div>
        
        {/* Decorative pixel elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-pixel-sm animate-pulse" />
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-secondary rounded-pixel animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-pixel-sm animate-pulse" style={{animationDelay: '2s'}} />
      </div>
    </section>
  );
}
