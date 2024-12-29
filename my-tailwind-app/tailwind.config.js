/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors:{
      background : '#0E1428;',
    },
      fontFamily:{
        'sans' : ['Roboto','Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

