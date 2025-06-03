/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
         blue:{
        500:"#512da8"
      },
      lightblue:"#a289df"
      }
     
    },
  },
  plugins: [],
}

