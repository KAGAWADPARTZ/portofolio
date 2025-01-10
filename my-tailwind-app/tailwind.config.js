/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,scss}"],
  theme: {
    extend: {colors:{
      DarkBackground : '#0E1428;',
      LightBackground : '#FAF9F6',
      Azure: '#F0FFFF',
      Aqua : '#00FFFF',
      BabyBlue : '#89CFF0',
      BrightBlue : '#0096FF',


    },
      fontFamily:{
        'sans' : ['Roboto','Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

