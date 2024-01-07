/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'sc': '1200px',
        'br': '1173px',
        'rw' :'882px',
        'ui':'764px',

      },
      fontFamily: {
        'myriad': ['Myriad Pro', 'sans-serif']
        // 'custom': ['Kanit', 'fallbackFont', 'sans-serif']
      },
      colors: {
        'backgroundcolor1': 'var(--backgroundcolor1)',
        'navcolor': 'var(--navcolor)',
        'textcolor1': 'var(--textcolor1)',
        'textcolor2': 'var(--textcolor2)',
        'color3': 'var(--color3)',
        'color1': 'var(--color1)',
      }
    },
  },
  variants: {},
  plugins: [],
}

