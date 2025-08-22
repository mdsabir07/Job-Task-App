/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 VERY IMPORTANT
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // update path as needed
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
