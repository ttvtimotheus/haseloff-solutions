import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
          light: '#22d3ee',
        },
        signal: '#fb923c',
        background: '#ffffff',
        surface: '#f9fafb',
        border: '#e5e7eb',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pixel-sm': '2px',
        'pixel': '4px',
        'pixel-lg': '6px',
      },
      boxShadow: {
        'pixel': '2px 2px 0px rgba(0, 0, 0, 0.1)',
        'pixel-hover': '3px 3px 0px rgba(0, 0, 0, 0.15)',
        'pixel-active': '1px 1px 0px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pixel-shift': 'pixelShift 0.3s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'grid-pulse': 'gridPulse 20s ease-in-out infinite',
        'stagger-in': 'staggerIn 0.6s ease-out forwards',
      },
      keyframes: {
        pixelShift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(2px, 2px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.1' },
        },
        staggerIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'url("/grid-pattern.svg")',
      },
    },
  },
  plugins: [],
};

export default config;
