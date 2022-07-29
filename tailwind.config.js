/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Inter var", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        michi: ["Mochiy Pop One", "sans - serif"],
        monserrat: ["Montserrat", "sans - serif"],
        pacifico: ["Pacifico", "cursive"],
        poppins: ["Poppins", "sans - serif"],
      }
    },
  },
  plugins: [],
}