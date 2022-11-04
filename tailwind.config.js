/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        pro: ['"Source Sans Pro"', "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        light: "white",
        darken: "#222",
      },
    },
  },
  plugins: [],
};
