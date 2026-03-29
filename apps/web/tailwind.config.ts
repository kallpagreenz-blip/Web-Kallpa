import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:       '#3a7d1e',
          mid:         '#569b32',
          light:       '#83c346',
          accent:      '#f7d86a',
          dark:        '#1a2e1a',
          body:        '#3d5c3a',
          bg:          '#f5f9f2',
          border:      '#dde8d8',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '14px',
        '3xl': '22px',
      },
      boxShadow: {
        'sm':    '0 2px 8px rgba(26,46,26,0.07)',
        'md':    '0 8px 28px rgba(26,46,26,0.11)',
        'lg':    '0 20px 60px rgba(26,46,26,0.16)',
        'green': '0 8px 20px rgba(86,155,50,0.32)',
      },
      animation: {
        'fade-up':   'fadeUp 0.55s ease forwards',
        'float':     'float 6s ease-in-out infinite',
        'pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
