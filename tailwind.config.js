/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#02222b',
        secondary: '#380331',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem', // Corrected to uppercase "DEFAULT"
          sm: '3rem',
        },
      },
    },
  },
  darkMode:"class",
  plugins: [],
}
