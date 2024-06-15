/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts,scss}'],
  darkMode: 'class', // Cambiar a 'class' para manejar el modo oscuro con clases
  theme: {
    extend: {
      colors: {
        primary: '#d33c3c',
        darkBg: '#000000',
        lightBg: '#ffffff',
        darkText: '#ffffff',
        lightText: '#000000',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        'neomorphism': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      },
      borderRadius: {
        'neomorphism': '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
