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
        primaryBg: '#fbf0df',
        secondaryBg: "#22254b",
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
}