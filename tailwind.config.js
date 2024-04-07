/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
        palanquin: ['Palanquin','sans-serif'],
      },
      colors: {
        primary: '#1A0202',
        secondary: '#7E45E2',
        light: '#f2f2f2',
      },
    },
  },
  plugins: [],
}
