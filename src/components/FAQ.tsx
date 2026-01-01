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
      {/* Pixel-Highlights removed */}
      
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
          <PixelCard title="SYSTEM_FAQ" className="bg-surface">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white border-2 border-primary rounded-pixel p-4 shadow-pixel-sm hover:shadow-pixel transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left focus:outline-none"
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
                </div>
              ))}
            </div>

            {/* Zusätzliche Kontakt-Info */}
            <div className="mt-12 text-center pt-8 border-t-2 border-dashed border-gray-300">
                <div className="flex items-center justify-center gap-3 mb-4">
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
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}
