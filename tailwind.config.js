const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          50: '#faf7f2',
          100: '#f0e9db',
          300: '#dccdae',
          500: '#C9B180',
          600: '#b09b70',
          700: '#978560',
          800: '#7E6F50',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
