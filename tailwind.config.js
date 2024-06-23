/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-1': '#387943',
        'red-1': '#E3803B',
        'darkText-1': '#354E3B',
        'lightbg-1': '#EFEDE6',
      },
      backgroundImage: {
        separator1: "url('/separator-pattern1.png')",
      },
    },
  },
  plugins: [],
};
