/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#18181D',
      },
      colors: {
        primary: '#C5C5C5',
        secondary: '#808080',
        onyx: '#181818',
        mineShaft: '#383737',
        grColor1: '#FFB800',
        grColor2: '#E93F3F',
        grColor3: '#3F64E9'
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

