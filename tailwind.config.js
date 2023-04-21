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

    extend: {},
  },
  plugins: [],
};
