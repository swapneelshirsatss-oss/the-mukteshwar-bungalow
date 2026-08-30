import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  dark?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '', dark = false }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 text-xs uppercase tracking-widest font-medium ${
        dark ? 'text-ivory-200/70' : 'text-charcoal-500'
      } ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors hover:text-himalayan-700 ${
              dark ? 'hover:text-ivory-100' : 'hover:text-himalayan-700'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="inline-flex items-center gap-2">
              <ChevronRight className="w-3 h-3 opacity-40" />
              {isLast ? (
                <span
                  className={`font-semibold ${
                    dark ? 'text-ivory-100' : 'text-charcoal-900'
                  }`}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className={`transition-colors ${
                    dark ? 'hover:text-ivory-100' : 'hover:text-himalayan-700'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
