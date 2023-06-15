const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    fontFamily: {
      pistols: ['sex_pistolsregular', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'fd-blue': '#98f5f8',
        'fd-yellow': '#eeff40',
        'fd-pink': '#ff43ae',
      },
      gridTemplateRows: {
        main: 'min-content 1fr',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'sex_pistolsregular',
            },
            h2: {
              fontFamily: 'sex_pistolsregular',
              fontSize: '3rem',
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
