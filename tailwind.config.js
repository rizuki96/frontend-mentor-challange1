module.exports = {
  purge: [
    'index.html',
    './resources/css/app.css'
  ],
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        grayish: {
          veryDarkBlue: 'hsl(217, 19%, 35%)',
          darkBlue: 'hsl(214, 17%, 51%)',
          grayBlue: 'hsl(212, 23%, 69%)',
          lightGrayBlue: 'hsl(210, 46%, 95%)'
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
