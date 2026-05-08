/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0dccf2',
        'background-light': '#f5f8f8',
        'background-dark': '#101f22',
        'card-dark': '#162a2e',
        'card-light': '#ffffff',
        'surface-dark': '#162a2f',
        'surface-darker': '#0b1618',
        'nav-bg': '#0b1618',
        'background-card': '#182f34',
        'background-input': '#224249',
        'text-muted': '#90c1cb',
      },
      fontFamily: {
        display: ['"Aldrich"', 'sans-serif'],
        heading: ['"Oswald"', 'sans-serif'],
        body: ['"Roboto Condensed"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
