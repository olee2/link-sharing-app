/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    boxShadow: {
      activeSelection: "0 0 32px rgba(99,60,255,0.25)",
      regular: "0 0 32px rgba(0,0,0,0.1)"
    },
    fontSize: { hm: "32px", hs: "16px", bm: "16px", bs: "12px" },
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
