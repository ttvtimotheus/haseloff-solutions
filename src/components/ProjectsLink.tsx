'use client';

import { useRouter } from '@/i18n/navigation';

interface SectionLinkProps {
  children: React.ReactNode;
  className?: string;
  sectionId: string;
}

export default function SectionLink({ children, className, sectionId }: SectionLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to home page first
    router.push('/');
    
    // Small delay to ensure page loads, then scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

// Backward compatibility
export { SectionLink as ProjectsLink };
