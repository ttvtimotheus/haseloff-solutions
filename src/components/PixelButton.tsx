'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 disabled:pointer-events-none rounded-pixel border-2 border-primary';
    
    const variants = {
      primary: 'bg-primary text-white shadow-pixel hover:shadow-pixel-hover active:shadow-pixel-active',
      secondary: 'bg-secondary text-white shadow-pixel hover:shadow-pixel-hover active:shadow-pixel-active',
      ghost: 'bg-transparent text-primary hover:bg-surface shadow-pixel hover:shadow-pixel-hover active:shadow-pixel-active',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
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
