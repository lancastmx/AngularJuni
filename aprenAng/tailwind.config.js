/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,ts,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Aquí puedes agregar tus colores personalizados
        primary: '#d33c3c',
        secondary: '#000000',
        light: {
          100: '#ffffff',
          200: '#f2f2f2',
          300: '#e6e6e6',
          400: '#d9d9d9',
          500: '#cccccc',
          600: '#bfbfbf',
          700: '#b3b3b3',
          800: '#a6a6a6',
          900: '#999999',
        },
        dark: {
          100: '#333333',
          200: '#292929',
          300: '#1f1f1f',
          400: '#141414',
          500: '#0a0a0a',
          600: '#000000',
        },
      },
      fontFamily: {
        sans: ['Merriweather', 'serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'neomorphism': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      },
      borderRadius: {
        'neomorphism': '10px',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-gradient': '#d33c3c',
        'secondary-gradient': '#000000',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
