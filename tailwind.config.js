/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ['DotGothic16'],
        notosanjp: ['Noto+Sans+JP']
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp'),],

  daisyui: {
    themes: ['cupcake', 'halloween'],
    darkTheme: "halloween",
  }
};
