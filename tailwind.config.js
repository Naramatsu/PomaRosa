/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "header-in": "header-in 0.5s ease linear",
      },
      keyframes: {
        "header-in": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      colors: {
        beige: "#eedbd8",
        "dark-brown": "#40251b",
        "dark-beige": "#ecc1bb",
        green: "#77afaa",
        brown: "#8d533d",
      },
    },
  },
  plugins: [],
};
