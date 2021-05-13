const { orange } = require('tailwindcss/colors');

module.exports = {
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

  variants: {
    extend: {},
  },
}
