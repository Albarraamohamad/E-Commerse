/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans your source files
  theme: {
    extend: {},
    screens: {
      xs: "300px", // Extra small screens
      sm: "640px", // Small screens
      md: "768px", // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      "2xl": "1536px", // 2X Extra large screens
    },
  },
  plugins: [],
};
