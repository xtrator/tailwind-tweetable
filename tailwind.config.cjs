/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#1DA1F2",
      "primary-hover": "#1B95E0",
      "primary-disable": "#9AD0F9",
      "primary-text": "#0F1419",
      "secondary-text": "#5B7083",
      error: "#DD2E44",
      background: "#EBEEF0",
      "background-2": "#F7F9FA",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
