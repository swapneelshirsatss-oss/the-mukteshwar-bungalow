import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'himalayan';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  isExternal = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 select-none disabled:opacity-50 disabled:cursor-not-allowed text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-himalayan-700 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 gap-1.5 rounded-sm',
    md: 'text-xs md:text-sm px-6 py-3.5 gap-2 rounded-sm',
    lg: 'text-sm md:text-base px-8 py-4 gap-2.5 rounded-sm'
  };

  const variantStyles = {
    // Primary: Charcoal Slate bg + Warm Ivory text
    primary: 'bg-charcoal-900 text-ivory-100 hover:bg-charcoal-800 shadow-subtle hover:shadow-editorial active:scale-[0.99]',
    // Himalayan Red accent button
    himalayan: 'bg-himalayan-700 text-ivory-100 hover:bg-himalayan-800 shadow-himalayan hover:shadow-luxury active:scale-[0.99]',
    // Secondary: Warm Ivory elevated surface with subtle border
    secondary: 'bg-ivory-100 text-charcoal-900 border border-charcoal-900/20 hover:bg-ivory-50 hover:border-charcoal-900 active:scale-[0.99]',
    // Outline: Transparent with Charcoal border
    outline: 'bg-transparent border border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-100 active:scale-[0.99]',
    // Ghost: Transparent with red hover accent
    ghost: 'bg-transparent text-charcoal-900 hover:text-himalayan-700 hover:bg-charcoal-900/5'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
