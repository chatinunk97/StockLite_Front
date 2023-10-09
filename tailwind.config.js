/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        waterred: "#fb7185",
        waterredHover:"#f43f5e"
      },
    },
  },
  plugins: [],
};
