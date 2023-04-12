/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'very-light': '#F8F9FA',
        light: '#DEE2E6',
        mid: '#ADB5BD',
        dark: '#343A40',
        'very-dark': '#212529',
      },
      boxShadow: {
        cust: '6px 12px 24px rgba(145, 145, 145, 0.3)',
        'library-search': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
