/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors:{
      DarkBackground : '#0E1428;',
      LightBackground : '#FAF9F6'
    },
      fontFamily:{
        'sans' : ['Roboto','Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

