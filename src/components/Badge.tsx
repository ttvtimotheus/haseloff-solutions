import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function Badge({ children, dark = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-display font-semibold',
        dark
          ? 'bg-cream/10 text-cream/60'
          : 'bg-ink/5 text-ink/60',
        className
      )}
    >
      {children}
    </span>
  );
}
