'use client';

import { cn } from '@/lib/utils';

interface PixelCardSkeletonProps {
  className?: string;
  variant?: 'project' | 'service' | 'default';
  style?: React.CSSProperties;
}

export default function PixelCardSkeleton({ className, variant = 'default', style }: PixelCardSkeletonProps) {
  return (
    <div 
      className={cn(
        'relative bg-gray-100 border-2 border-gray-200 rounded-pixel p-6 animate-pulse',
        'shadow-pixel',
        className
      )}
      style={style}
    >
      {/* Service Icon Skeleton */}
      {variant === 'service' && (
        <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-pixel mb-4 mx-auto">
          <div className="w-8 h-8 bg-gray-300 rounded-pixel-sm animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
      )}

      {/* Title Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-6 bg-gray-200 rounded-pixel w-3/4"></div>
        {variant === 'project' && (
          <div className="h-4 bg-gray-200 rounded-pixel-sm w-1/2"></div>
        )}
      </div>

      {/* Content Skeleton */}
      <div className="space-y-3 mb-4">
        <div className="h-4 bg-gray-200 rounded-pixel-sm w-full"></div>
        <div className="h-4 bg-gray-200 rounded-pixel-sm w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded-pixel-sm w-3/4"></div>
      </div>

      {/* Tags Skeleton */}
      {variant === 'project' && (
        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="h-6 bg-gray-200 rounded-pixel-sm w-16 animate-pulse"
              style={{animationDelay: `${i * 0.1}s`}}
            />
          ))}
        </div>
      )}

      {/* Tech Stack Skeleton */}
      {variant === 'project' && (
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-gray-200 rounded-pixel-sm"></div>
            <div className="h-4 bg-gray-200 rounded-pixel-sm w-20"></div>
          </div>
          <div className="flex flex-wrap gap-1">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="h-5 bg-gray-200 rounded-pixel-sm w-12 animate-pulse"
                style={{animationDelay: `${i * 0.15}s`}}
              />
            ))}
          </div>
        </div>
      )}

      {/* Animated pixel elements */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-gray-300 rounded-pixel-sm animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-2 right-8 w-1 h-1 bg-gray-300 rounded-pixel-sm animate-pulse" style={{animationDelay: '1.5s'}} />
    </div>
  );
}
