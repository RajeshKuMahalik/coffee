/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0206",
        seconday: "#405054",
      },
      container: {
        center: true,
        padding : {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
}

