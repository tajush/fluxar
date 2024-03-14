/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./fluxar/**/*.liquid"],
  theme: {
    extend: {
      spacing: {
        25: "6.25rem",
      },
      colors: {
        gray: "#6D7175",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      backgroundImage: {
        "login-bg": `url(/assets/login-bg.jpg)`,
      },
    },
  },
  plugins: [],
};
