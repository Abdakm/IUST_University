const flowbite = require("flowbite/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all component paths in your project
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite's content
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005478",
        secondary: "#E6C400",
        third: "#0088C2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
