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
      Mustard : '#FFDB58',
      NavyBlue : '#000080',
      Rose : '#FF007F',
      Compliment : '#FF8080',


    },
      fontFamily:{
        'sans' : ['Roboto','Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

