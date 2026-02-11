'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted' | 'success' | 'warning' | 'error';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    muted: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
    success: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    error: 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium border rounded-full transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
