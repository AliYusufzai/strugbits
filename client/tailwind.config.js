/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['Lato', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000',
      'green': {
        300: "#57BC90",
        400: '#015249',
        500: '#57BC90',
        600: '#39B54A',
        700: '#043933',
      },
      'grey': {
        400: "#F3F3F3",
        700: "#5A5F65"
      },
      'red': {
        700: "#D80000"
      }
      ,
    },
    boxShadow: {
      '1': "0px 5px 25px #00000040",
      '2': "0px 3px 15px #6B6B6B1A",
    }
  },
  plugins: [],
}