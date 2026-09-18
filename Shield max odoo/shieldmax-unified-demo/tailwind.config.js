/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#EA580C', // Rich Burnt Orange / Hermes Orange
          600: '#C2410C',
        },
        stone: {
          50: '#FAFAF9', // Ivory / Canvas
          100: '#F5F5F4', 
          200: '#E7E5E4', // Border
          800: '#292524',
          900: '#1C1917', // Warm Off-Black
        },
        gray: {
          900: '#1C1917', // Ink overrides
        },
        surface: '#FFFFFF', // Surface
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant', 'serif'],
      },
      borderRadius: {
        'lg': '0.75rem',   // 12px for softer, premium feel
        'md': '0.5rem',    // 8px
        'sm': '0.25rem',   // 4px
      },
      boxShadow: {
        'luxury': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'luxury-hover': '0 12px 40px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
