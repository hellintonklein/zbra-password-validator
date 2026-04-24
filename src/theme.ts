import { createTheme, MantineColorsTuple } from '@mantine/core';

// Helper to generate a monochromatic or placeholder palette based on our brand color
// Mantine expects 10 shades. For simplicity in this migration, we'll map our main var
// to the middle index (5 or 6) and use placeholders for others if needed, 
// or ideally use real shades.
const primaryShades: MantineColorsTuple = [
  '#eef2ff', // 50
  '#e0e7ff', // 100
  '#c7d2fe', // 200
  '#a5b4fc', // 300
  '#818cf8', // 400
  '#6366f1', // 500 (brand-primary)
  '#4f46e5', // 600
  '#4338ca', // 700
  '#3730a3', // 800
  '#312e81', // 900
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: primaryShades,
  },
  fontFamily: 'var(--font-family-sans)',
  headings: {
    fontFamily: 'var(--font-family-display)',
    fontWeight: '700',
  },
  defaultRadius: 'xl',
  spacing: {
    xs: 'var(--space-1)',
    sm: 'var(--space-2)',
    md: 'var(--space-4)',
    lg: 'var(--space-5)',
    xl: 'var(--space-6)',
  },
  breakpoints: {
    xs: '30rem',
    sm: '40rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
  },
  shadows: {
    xs: 'var(--shadow-sm)',
    sm: 'var(--shadow-md)',
    md: 'var(--shadow-lg)',
    lg: 'var(--shadow-xl)',
    xl: 'var(--shadow-luxury)',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
      styles: {
        root: {
          transition: 'all 0.2s ease',
          boxShadow: 'var(--shadow-button)',
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
      styles: {
        input: {
          transition: 'all 0.2s ease',
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-medium)',
          '&:focus': {
            borderColor: 'var(--brand-primary)',
            boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.1)',
          },
        },
        label: {
          marginBottom: 'var(--space-2)',
        },
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: 'xl',
        size: 'lg',
      },
      styles: {
        input: {
          transition: 'all 0.2s ease',
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-medium)',
          '&:focus-within': {
            borderColor: 'var(--brand-primary)',
            boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.1)',
          },
        },
        label: {
          marginBottom: 'var(--space-2)',
        },
      },
    },
    Card: {
      defaultProps: {
        radius: '2xl',
        shadow: 'xl',
      },
    },
  },
});
