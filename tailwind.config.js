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
      transitionProperty:{
        transitionPropertyName: 'transition',
      },
      transitionDuration: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'linear': 'linear',
      },
      backgroundImage: {
        'contact-bg': "url('./assets/images/background.svg')",
      },
    },
  },
  plugins: [],
}
