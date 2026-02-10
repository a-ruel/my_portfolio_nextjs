/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      lightHover: "#fcf4ff",
      darkHover: "#2a004a",
      darkTheme:"#11001F",
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Ovo: ["Ovo", "serif"]
    },
    boxShadow: {
      "black" : "4px 4px 0 #000",
      "white" : "4px 4px 0 #fff"
    },

    gridTemplateColumns: {
      "auto": "repeat(auto-fit, minmax(200px, 1fr))"
    }
  },

};

export const darkMode = "class";

export const plugins = [];

