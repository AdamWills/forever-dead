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
        'fd-blue': '#4dc8ed',
        'fd-yellow': '#f7ec1f',
        'fd-pink': 'hotpink',
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
