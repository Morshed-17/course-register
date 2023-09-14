/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1C1B1B',
        'primary-bg': '#F3F3F3',
        'primary-sky': '#2F80ED',
        'primary-gray': 'rgba(28, 27, 27, 0.60)',

      }
    },
  },
  plugins: [],
}

