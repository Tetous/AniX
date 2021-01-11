module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        violet: "#0B1622",
        "violet-800": "#152232",
        gray: "rgb(201, 215, 227)",
        "gray-800": "rgb(173, 192, 210)",
        "gray-700": "rgb(139, 160, 178)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
