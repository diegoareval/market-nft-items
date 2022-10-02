/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
