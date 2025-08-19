/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust to match your project
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xlg: "1400px", // custom breakpoint
      "2xl": "1536px",
    },
  },
  plugins: [],
};
