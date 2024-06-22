/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-1': '#387943',
        'red-1': '#E3803B',
      },
      backgroundImage: {
        separator1: "url('/separator-pattern1.png')",
      },
    },
  },
  plugins: [],
};
