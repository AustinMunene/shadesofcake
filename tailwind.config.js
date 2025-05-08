/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f1fb',
          100: '#e9e2f7',
          200: '#d3c5ef',
          300: '#bea7e7',
          400: '#a889df',
          500: '#9b72cf', // Primary purple
          600: '#7c5ba6',
          700: '#5d437d',
          800: '#3e2c53',
          900: '#1f162a',
        },
        navy: {
          50: '#e6e6ef',
          100: '#ccccdf',
          200: '#9a9abf',
          300: '#67679f',
          400: '#35357f',
          500: '#1a1a5d', // Navy blue
          600: '#15154a',
          700: '#101038',
          800: '#0a0a25',
          900: '#050513',
        },
        blush: {
          50: '#fef6f9',
          100: '#feeef3',
          200: '#fddde7',
          300: '#fcccdb',
          400: '#fbbbcf',
          500: '#fde5ec', // Blush pink background
          600: '#cabbbd',
          700: '#988c8e',
          800: '#655d5e',
          900: '#332e2f',
        },
      },
      fontFamily: {
        sans: ['Futura', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};