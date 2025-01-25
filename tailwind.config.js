/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#0E7490",
        primary: '#fbf0df',
        secondary: "#22254b",
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}