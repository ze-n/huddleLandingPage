/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,html}"],
  theme: {
    screens: { mobile: "375px", desktop: "1440px" },
    colors: {
      white: "white",
      black: "black",
      violet: "hsl(257, 40%, 49%)",
      magenta: "hsl(300, 69%, 71%)",
    },
    fontSize: {
      lg: ["1.2rem", { lineHeight: "1.6rem" }],
    },
    fontWeight: {
      reg: "400",
      semi: "600",
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
