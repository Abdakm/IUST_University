const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93c5fd", // Light variant of primary color
          DEFAULT: "#3b82f6", // Default primary color
          dark: "#1e3a8a", // Dark variant of primary color
        },
        secondary: {
          light: "#a7f3d0",
          DEFAULT: "#10b981",
          dark: "#064e3b",
        },
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
