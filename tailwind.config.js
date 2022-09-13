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
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],

  daisyui: {
    themes: ['fantasy', 'halloween'],
    darkTheme: "halloween",
  }
};
