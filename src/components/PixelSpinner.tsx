'use client';

import { cn } from '@/lib/utils';

interface PixelSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PixelSpinner({ size = 'md', className }: PixelSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  const pixelSize = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2'
  };

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      {/* Outer frame */}
      <div className="absolute inset-0 border-2 border-primary rounded-pixel">
      </div>
      
      {/* Animated pixels */}
      <div className="absolute inset-1 grid grid-cols-4 grid-rows-4 gap-0.5">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={cn(
              pixelSize[size],
              'rounded-pixel-sm animate-pulse',
              // Different colors and delays for variety
              i % 4 === 0 ? 'bg-accent' : 
              i % 4 === 1 ? 'bg-secondary' : 
              i % 4 === 2 ? 'bg-primary' : 'bg-gray-300'
            )}
            style={{
              animationDelay: `${(i * 100)}ms`,
              animationDuration: '1.2s'
            }}
          />
        ))}
      </div>
      
      {/* Central rotating element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={cn(
            'bg-secondary rounded-pixel-sm animate-spin',
            size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
          )}
          style={{ animationDuration: '2s' }}
        />
      </div>
    </div>
  );
}
