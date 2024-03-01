/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Tgray-100": "#f2f2f2",
        "Tgray-200": "#d9d9d9",
        "Tgray-300": "#808080",
        "Tgray-400": "#333333",
        "Tgray-500": "#262626",
        "Tgray-600": "#1a1a1a",
        "Tgray-700": "#0d0d0d",
        Tpurple: "#8284fa",
        "Tpurple-dark": "#5e60ce",
        Tblue: "#4ea8de",
        "Tblue-dark": "#1e6f9f",
        Tdanger: "#e25858",
      },
    },
  },
  plugins: [],
};
