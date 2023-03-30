/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins, sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
