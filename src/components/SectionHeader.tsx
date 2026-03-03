import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-16 sm:mb-20', align === 'center' && 'text-center', className)}>
      <h2 className={cn(
        'font-display font-extrabold text-display-xl mb-6',
        dark ? 'text-cream' : 'text-ink'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg sm:text-xl max-w-2xl leading-relaxed',
          align === 'center' && 'mx-auto',
          dark ? 'text-cream/45' : 'text-ink/45'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
