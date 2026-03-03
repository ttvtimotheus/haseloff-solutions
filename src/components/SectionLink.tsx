'use client';

import { useRouter } from '@/i18n/navigation';

interface SectionLinkProps {
  children: React.ReactNode;
  className?: string;
  sectionId: string;
}

export default function SectionLink({
  children,
  className,
  sectionId,
}: SectionLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <div
      onClick={handleClick}
      className={className}
      style={{ cursor: 'pointer' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
}
