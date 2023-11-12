/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Passion One", "sans-serif"],
      },
      colors: {
        yellow: "#FCBA28",
        red: "#ED203D",
        "blue-green": "#13AB93",
        black: "#0F0D0E",
        white: "#f9f4da",
        "bg-input": "#231F20",
      },
    },
  },
  plugins: [],
};
