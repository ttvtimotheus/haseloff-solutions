'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PixelCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  title?: string;
}

const PixelCard = forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, hover = false, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-white border-2 border-primary rounded-pixel',
          'shadow-pixel transition-all duration-200',
          hover && 'hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-pixel-hover cursor-pointer group',
          !title && 'p-6', // Apply padding here if no title, otherwise handle in content
          className
        )}
        {...props}
      >
        {title && (
          <>
            {/* Window Title Bar */}
            <div className="bg-primary text-white px-4 py-2 flex items-center justify-between border-b-2 border-primary rounded-t-[2px]">
              <span className="font-display font-bold text-sm tracking-wide uppercase">
                {title}
              </span>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-white border border-primary rounded-sm hover:bg-gray-200 transition-colors" />
                <div className="w-3 h-3 bg-secondary border border-primary rounded-sm hover:bg-secondary-light transition-colors" />
              </div>
            </div>
            {/* Content Area */}
            <div className="p-6">
              {children}
            </div>
          </>
        )}
        {!title && children}
      </div>
    );
  }
);

PixelCard.displayName = 'PixelCard';

export default PixelCard;
