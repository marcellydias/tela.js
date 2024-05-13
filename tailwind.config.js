/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      logo: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        customWhite: "#D9D9D9",
        customGreen: "#045C34",
        customGrey: "#979797",
        customGrey2: "#979797",
      },
    },
  },
  plugins: [],
};
