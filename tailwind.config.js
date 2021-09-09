const { orange } = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',

  purge: [
    'assets/**/*.svg',
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
  ],

  theme: {
    extend: {
      colors: { orange },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },

      screens: {
        xxs: '320px',
        xs: '375px',
      },
    },
  },
};
