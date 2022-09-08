/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        dotgothic: ['DotGothic16']
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp'),],

  daisyui: {
    themes: ['fantasy', 'halloween'],
    darkTheme: "halloween",
  }
};
