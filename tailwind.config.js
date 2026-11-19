/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#172033',
          dark: '#0F1626',
          light: '#24324D',
        },
        brandOrange: {
          DEFAULT: '#FF683D',
          hover: '#E55328',
          light: '#FFF0EB',
          glow: 'rgba(255, 104, 61, 0.25)',
        },
        lavender: {
          DEFAULT: '#E5E7FF',
          light: '#F0F2FF',
          dark: '#C8CCFF',
        },
        lightBlue: {
          DEFAULT: '#DCEEFF',
          light: '#EFF7FF',
          soft: '#E8F3FF',
        },
        lightGrey: '#F5F6FA',
      },
      fontFamily: {
        sans: ['"Noto Sans Devanagari"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Noto Sans Devanagari"', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 4px 20px -2px rgba(23, 32, 51, 0.06)',
        'elevated': '0 12px 32px -4px rgba(23, 32, 51, 0.1)',
        'orange-glow': '0 8px 24px -4px rgba(255, 104, 61, 0.35)',
      }
    },
  },
  plugins: [],
}
