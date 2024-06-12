/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'neomorphism': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        'neomorphism': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
