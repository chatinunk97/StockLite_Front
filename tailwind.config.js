/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        waterred: "#fb7185",
        waterredHover:"#f43f5e",
        smoothgray : "#d9d9d9",
        hardgray :"#b3a8a8"
      },
      screens: {
        'maxsize': '1800px',
        'tablet' : '1200px'
      },
      maxWidth:{
        '1/8' : '80%'
      },
    },

  },
  plugins: [],
};
