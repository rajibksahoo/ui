'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
  icon,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg';

  const variants: Record<string, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50',
    secondary:
      'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 hover:border-slate-500',
    ghost: 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50',
  };

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {icon}
        {children}
        {external && <ArrowUpRight size={16} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
