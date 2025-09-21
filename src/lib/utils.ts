import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePixelCorners(missingCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') {
  const baseClass = 'before:absolute before:content-[""] before:bg-background';
  
  switch (missingCorner) {
    case 'top-left':
      return `${baseClass} before:top-0 before:left-0 before:w-2 before:h-2`;
    case 'top-right':
      return `${baseClass} before:top-0 before:right-0 before:w-2 before:h-2`;
    case 'bottom-left':
      return `${baseClass} before:bottom-0 before:left-0 before:w-2 before:h-2`;
    case 'bottom-right':
      return `${baseClass} before:bottom-0 before:right-0 before:w-2 before:h-2`;
    default:
      return '';
  }
}

export function staggerDelay(index: number, baseDelay: number = 100): React.CSSProperties {
  return {
    animationDelay: `${index * baseDelay}ms`,
  };
}
