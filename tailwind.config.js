/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pale: "#EFE9E4",
      light: "#AB8F6E",
      brown: "#5E5343",
    },
    fontSize: {
      "title-large": "96px",
      "title-medium": "40px",
      "title-small": "30px",
      "subtitle-large": "24px",
      "subtitle-medium": "20px",
      "subtitle-small": "14px",
      "paragraph-large": "20px",
      "paragraph-medium": "16px",
    },
    fontFamily: {
      carlito: ["Carlito", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    screens: {
      md: "1000px",
      lg: "1280px",
    },
    extend: {
      letterSpacing: {
        subtitle: "5px",
      },
    },
    plugins: [],
  },
};
