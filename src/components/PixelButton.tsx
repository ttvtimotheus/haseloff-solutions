'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  pixelCorner?: 'top-right' | 'bottom-right';
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = 'primary', size = 'md', pixelCorner = 'top-right', children, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2';
    
    const isFilled = variant === 'primary' || variant === 'secondary';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-light drop-shadow-pixel hover:drop-shadow-pixel-hover active:drop-shadow-pixel-active',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark drop-shadow-pixel hover:drop-shadow-pixel-hover active:drop-shadow-pixel-active',
      ghost: 'bg-transparent text-primary hover:bg-surface border-2 border-primary shadow-pixel hover:shadow-pixel-hover active:shadow-pixel-active',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    const clipPathStyles: Record<string, React.CSSProperties> = {
      'top-right': { clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' },
      'bottom-right': { clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' },
    };

    const style = isFilled ? clipPathStyles[pixelCorner] : undefined;
    
    return (
      <button
        ref={ref}
        style={style}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          !isFilled && 'rounded-pixel',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PixelButton.displayName = 'PixelButton';

export default PixelButton;
