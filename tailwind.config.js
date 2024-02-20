/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      instrumentSans: ["Instrument Sans"]
    },
    colors: {
      purple: "#633CFF",
      purpleHover: "#BEADFF",
      purpleLight: "#EFEBFF",
      greyDark: "#333333",
      grey: "#737373",
      borders: "#D9D9D9",
      greyLight: "#FAFAFA",
      white: "#FFFFFF",
      red: "#FF3939"
    },
    extend: {}
  },

  plugins: [require("@tailwindcss/forms"), require("daisyui")]
};
