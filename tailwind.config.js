/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'aboutBg' :"url('../src/assets/aboutImage.webp')"
      },
      textColor:{
        'definedGrey':"#737373"
      },

    },
  },
  plugins: [],
}

