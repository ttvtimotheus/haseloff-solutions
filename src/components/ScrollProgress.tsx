'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setWidth(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] bg-transparent z-[100]">
      <div 
        className="h-full bg-primary shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-100 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
