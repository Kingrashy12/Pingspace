/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: "'Kanit', sans-serif",
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
