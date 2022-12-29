/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    extend: {
      lighterSkyBlue: "#7dd3fc",
      lightSkyBlue: "#38bdf8",
      skyBlue: "#0ea5e9",
      darkerSkyBlue: "#0284c7",
      darkSkyBlue: "#0369a1",
      screens: {
        sm: "700px",
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
