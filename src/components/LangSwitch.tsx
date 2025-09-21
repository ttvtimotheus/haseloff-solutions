'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export default function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'de' | 'en') => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="flex items-center gap-1 rounded-pixel border-2 border-primary p-1">
      <button
        onClick={() => switchLocale('de')}
        className={cn(
          'px-3 py-1 text-sm font-display font-bold transition-colors rounded-pixel-sm',
          locale === 'de' 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-surface'
        )}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-3 py-1 text-sm font-display font-bold transition-colors rounded-pixel-sm',
          locale === 'en' 
            ? 'bg-primary text-white' 
            : 'text-primary hover:bg-surface'
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
