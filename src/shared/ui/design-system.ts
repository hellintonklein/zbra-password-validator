import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for combining Tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DESIGN_TOKENS = {
  colors: {
    primary: 'var(--brand-primary)',
    secondary: 'var(--brand-secondary)',
    error: 'var(--brand-error)',
    warning: 'var(--brand-warning)',
    success: 'var(--brand-success)',
    bg: 'var(--bg-main)',
    surface: 'var(--bg-surface)',
    border: 'var(--border-medium)',
    slate: {
      900: '#0f172a',
      800: '#1e293b',
      600: '#475569',
      500: '#64748b',
      400: '#94a3b8',
      200: '#e2e8f0',
      100: '#f1f5f9',
      50: '#f8fafc',
    },
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    '3xl': 'var(--radius-3xl)',
    full: 'var(--radius-full)',
  },
  shadows: {
    soft: 'var(--shadow-sm)',
    medium: 'var(--shadow-md)',
    large: 'var(--shadow-lg)',
    luxury: 'var(--shadow-luxury)',
    button: 'var(--shadow-button)',
  },
};
