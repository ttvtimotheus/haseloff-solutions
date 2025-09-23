'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import PixelCard from './PixelCard';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const t = useTranslations('faq');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'duration',
      question: t('items.duration.question'),
      answer: t('items.duration.answer'),
    },
    {
      id: 'cost',
      question: t('items.cost.question'),
      answer: t('items.cost.answer'),
    },
    {
      id: 'technologies',
      question: t('items.technologies.question'),
      answer: t('items.technologies.answer'),
    },
    {
      id: 'maintenance',
      question: t('items.maintenance.question'),
      answer: t('items.maintenance.answer'),
    },
    {
      id: 'process',
      question: t('items.process.question'),
      answer: t('items.process.answer'),
    },
    {
      id: 'support',
      question: t('items.support.question'),
      answer: t('items.support.answer'),
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Pixel-Highlights im Hintergrund */}
      <div className="absolute top-14 right-12 w-3 h-3 bg-secondary rounded-pixel-sm animate-pulse opacity-20" />
      <div className="absolute bottom-16 left-8 w-2 h-2 bg-accent rounded-pixel animate-pulse opacity-15" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 left-14 w-4 h-4 bg-primary rounded-pixel-sm animate-pulse opacity-25" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <PixelCard 
                key={item.id}
                missingCorner={index % 2 === 0 ? 'top-right' : 'bottom-left'}
                className="transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-pixel"
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-medium text-lg pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div 
                        className={`w-6 h-6 bg-secondary text-white rounded-pixel-sm flex items-center justify-center transition-transform duration-200 ${
                          openItem === item.id ? 'rotate-45' : ''
                        }`}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="11" y="6" width="2" height="12" />
                          <rect x="6" y="11" width="12" height="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === item.id ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <div className="pt-4 border-t border-border">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </PixelCard>
            ))}
          </div>

          {/* Zusätzliche Kontakt-Info */}
          <div className="mt-12 text-center">
            <PixelCard missingCorner="top-right" className="bg-surface">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-pixel-sm animate-pulse"></div>
                <h3 className="font-display font-medium text-lg">
                  {t('contact.title')}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t('contact.description')}
              </p>
              <a 
                href="mailto:kontakt@haseloff-solutions.de"
                className="inline-flex items-center gap-2 font-display font-medium text-secondary hover:text-secondary-dark hover:translate-x-[1px] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="2" y="6" width="20" height="1" fill="currentColor"/>
                  <rect x="10" y="11" width="4" height="1" fill="currentColor"/>
                </svg>
                kontakt@haseloff-solutions.de
              </a>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
