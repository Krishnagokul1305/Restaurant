/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['Cormorant Upright', 'serif'],
        alt: ['Open Sans', 'sans-serif'],
      },
      colors: {
        golden: '#dcca87',
        black: '#0c0c0c',
        gray: '#545454',
        crimson: '#f5efdb',
        grey: '#aaaaaa',
        white: '#ffffff',
        blur:"rgba(62, 62, 62, 0.2)",
        silver:"#C0C0C0"
      },
    },
  },
  plugins: [],
}

