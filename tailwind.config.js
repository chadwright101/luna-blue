/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Raleway: "Raleway",
      Comorant: "Comorant",
      Josefin_Sans: "Josefin_Sans",
    },
    fontSize: {
      "60px": "3.75rem",
      "43px": "2.688rem",
      "35px": "2.188rem",
      "25px": "1.563rem",
      "17px": "1.063rem",
      "14px": "0.875rem",
    },
    colors: {
      beige: "#F6F3EA",
      lightBeige: "#FBFBF9",
      darkBeige: "#F3ECE7",
      brown: "#B56953",
      darkGrey: "#4d4d4d",
      black: "#0e0e0e",
      white: "#fff",
    },
    fontWeight: {
      300: "300",
      500: "500",
      700: "700",
    },
    screens: {
      phone: "425px",
      tablet: "650px",
      tabletLarge: "900px",
      desktopSmall: "1100px",
      desktop: "1400px",
    },
    extend: {},
  },
  plugins: [],
};
