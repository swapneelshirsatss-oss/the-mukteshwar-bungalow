import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
  showDivider?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  centered = false,
  dark = false,
  className = '',
  showDivider = true
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {subtitle && (
        <span
          className={`inline-block text-xs md:text-sm font-semibold uppercase tracking-widest-plus mb-3 ${
            dark ? 'text-himalayan-400' : 'text-himalayan-700'
          }`}
        >
          {subtitle}
        </span>
      )}
      
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-[1.15] mb-4 ${
          dark ? 'text-ivory-100' : 'text-charcoal-900'
        }`}
      >
        {title}
      </h2>

      {showDivider && (
        <div
          className={`h-0.5 w-16 mb-5 ${
            centered ? 'mx-auto' : ''
          } ${
            dark ? 'bg-himalayan-500' : 'bg-himalayan-700'
          }`}
        />
      )}

      {description && (
        <p
          className={`text-base md:text-lg font-light leading-relaxed ${
            dark ? 'text-ivory-200/80' : 'text-charcoal-700'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
