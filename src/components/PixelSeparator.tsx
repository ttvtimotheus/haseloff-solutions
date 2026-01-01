'use client';

import { cn } from '@/lib/utils';

interface PixelSeparatorProps {
  className?: string;
}

export default function PixelSeparator({ className }: PixelSeparatorProps) {
  return (
    <div className={cn('w-full py-8 flex items-center justify-center overflow-hidden', className)} aria-hidden="true">
      <div className="w-full h-4 relative">
        <svg 
          className="w-full h-4 text-gray-400" 
          width="100%" 
          height="4" 
        >
          <defs>
            <pattern id="pixel-dot-pattern" x="0" y="0" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="4" fill="url(#pixel-dot-pattern)" />
        </svg>
      </div>
    </div>
  );
}
