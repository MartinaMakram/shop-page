/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true ,
      },
      screens: {
        sm: "375px"
      },
      colors: {
        "white-secondary" : "#FBFBFB"
      }
    },
  },
  plugins: [],
}

