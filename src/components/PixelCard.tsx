'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  missingCorner?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  hover?: boolean;
}

const PixelCard = forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, missingCorner = 'top-right', hover = false, children, ...props }, ref) => {
    const cornerStyles = {
      'top-left': 'before:top-0 before:left-0',
      'top-right': 'before:top-0 before:right-0',
      'bottom-left': 'before:bottom-0 before:left-0',
      'bottom-right': 'before:bottom-0 before:right-0',
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-white border-2 border-primary rounded-pixel p-6',
          'before:absolute before:content-[""] before:w-4 before:h-4 before:bg-background',
          cornerStyles[missingCorner],
          hover && 'transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-hover cursor-pointer group',
          'shadow-pixel',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PixelCard.displayName = 'PixelCard';

export default PixelCard;
