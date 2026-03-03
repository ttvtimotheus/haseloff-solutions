'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'dark', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-display font-bold rounded-full transition-all duration-300 active:scale-[0.97]',
          {
            'bg-ink text-cream hover:opacity-80': variant === 'dark',
            'bg-cream text-ink hover:opacity-80': variant === 'light',
            'border border-current hover:opacity-70': variant === 'outline',
          },
          {
            'px-5 py-2.5 text-sm': size === 'sm',
            'px-7 py-3 text-base': size === 'md',
            'px-9 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
