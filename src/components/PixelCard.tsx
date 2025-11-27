'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const PixelCard = forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-white border-2 border-primary rounded-pixel p-6',
          'shadow-pixel transition-all duration-200',
          hover && 'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pixel-hover cursor-pointer group',
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
