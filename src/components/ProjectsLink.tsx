'use client';

import { useRouter } from '@/i18n/navigation';

interface ProjectsLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProjectsLink({ children, className }: ProjectsLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to home page first
    router.push('/');
    
    // Small delay to ensure page loads, then scroll to section
    setTimeout(() => {
      const element = document.getElementById('projekte');
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
