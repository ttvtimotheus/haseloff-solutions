'use client';

import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const baseUrl = 'https://haseloff-software.de';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item:
        index === 0
          ? `${baseUrl}/${pathSegments[0]}`
          : `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-ink/25" aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href as '/'}
                className="text-ink/30 hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-ink/60">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
