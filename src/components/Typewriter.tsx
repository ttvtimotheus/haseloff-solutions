'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
}

export default function Typewriter({ text, delay = 50, startDelay = 0, className = '' }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeChar, delay);
        } else {
          setIsTyping(false);
        }
      };
      
      typeChar();
    };

    const startTimeout = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, delay, startDelay]);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-[0.5em] h-[1em] bg-secondary align-middle ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
    </span>
  );
}
