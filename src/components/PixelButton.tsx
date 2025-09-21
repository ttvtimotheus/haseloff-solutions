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
    const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold transition-all duration-200 active:translate-x-[1px] active:translate-y-[1px] active:shadow-pixel-active focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-light shadow-pixel hover:shadow-pixel-hover',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-pixel hover:shadow-pixel-hover',
      ghost: 'bg-transparent text-primary hover:bg-surface border-2 border-primary',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    const cornerClasses = pixelCorner === 'top-right' 
      ? 'before:absolute before:content-[""] before:top-0 before:right-0 before:w-3 before:h-3 before:bg-background'
      : 'before:absolute before:content-[""] before:bottom-0 before:right-0 before:w-3 before:h-3 before:bg-background';
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          cornerClasses,
          'rounded-pixel',
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
