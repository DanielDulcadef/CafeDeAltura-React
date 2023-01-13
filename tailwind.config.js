/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'white': '#fff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000',
      'grey': '#515051',
      'strong-green': '#2a5b45',
      'green': '#2A5B45',
      'strong-grey': '#2B2A2B',
      'brown': '#E3DED7',
      'grey-form': '#6B7280',

    },
    extend: {
      backgroundImage: {
        'CoffeLait': "url('/src/Images/coffee_background.jpg')",
      }
    },
  },
  plugins: [],
}
