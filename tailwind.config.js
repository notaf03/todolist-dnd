/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primaryColor: "#4A2B84",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        primary: "Montserrat"
      },
    },
  },
  plugins: [],
}

