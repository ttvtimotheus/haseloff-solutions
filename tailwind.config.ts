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
        cream: '#f5f5f0',
        ink: '#0a0a0a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: [
          'clamp(3.5rem, 11vw, 9rem)',
          { lineHeight: '0.92', letterSpacing: '-0.04em' },
        ],
        'display-xl': [
          'clamp(2.5rem, 6vw, 5rem)',
          { lineHeight: '1.05', letterSpacing: '-0.03em' },
        ],
        'display-lg': [
          'clamp(1.8rem, 4vw, 3rem)',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-reverse': 'floatReverse 25s ease-in-out infinite',
        'spin-very-slow': 'spin 50s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        floatReverse: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-30px, 30px) scale(1.03)' },
          '66%': { transform: 'translate(20px, -20px) scale(0.97)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
