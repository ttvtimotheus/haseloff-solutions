import { useTranslations, useLocale } from 'next-intl';

export default function FAQSchema() {
  const t = useTranslations('faq');
  const locale = useLocale();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": locale,
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('items.duration.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('items.duration.answer')
        }
      },
      {
        "@type": "Question", 
        "name": t('items.cost.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('items.cost.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('items.technologies.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('items.technologies.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('items.maintenance.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('items.maintenance.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('items.process.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('items.process.answer')
        }
      },
      {
        "@type": "Question",
        "name": t('items.support.question'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('items.support.answer')
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
