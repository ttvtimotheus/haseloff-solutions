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
      router.replace(pathname as '/', { locale: newLocale });
    }
  };

  return (
    <div className="flex items-center gap-1 text-sm font-display font-bold">
      <button
        onClick={() => switchLocale('de')}
        className={cn('px-2 py-1 rounded transition-colors', locale === 'de' ? 'text-ink' : 'text-ink/30 hover:text-ink/60')}
        aria-label="Deutsch"
      >
        DE
      </button>
      <span className="text-ink/20">/</span>
      <button
        onClick={() => switchLocale('en')}
        className={cn('px-2 py-1 rounded transition-colors', locale === 'en' ? 'text-ink' : 'text-ink/30 hover:text-ink/60')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
