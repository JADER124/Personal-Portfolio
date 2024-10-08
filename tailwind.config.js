/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{
      'roboto': 'Roboto',
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 4s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    blueDark: "#0A192F",
    grayLight: "#E6F1FF",
    blueElectric: "#64FFDA",
    redAcent: "#FF5733"
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

