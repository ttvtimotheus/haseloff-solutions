import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function staggerDelay(index: number, baseDelay: number = 100): React.CSSProperties {
  return {
    animationDelay: `${index * baseDelay}ms`,
  };
}
