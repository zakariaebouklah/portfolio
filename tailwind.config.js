/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': {'max': '805px'},
      // => @media (max-width: 639px) { ... }
      'larger': '805px'
    },
    extend: {
      boxShadow: {
        '3xl': '0 3px 10px rgb(0 0 0 / 0.2)',
      },
      fontFamily: {
        'arvo': ['arvo'],
        'script': ['League Script']
      },
      colors: {
        //light-mode
        'light-one': "hsl(180, 31%, 83.5%)",
        'light-two': "hsl(194, 56.7%, 19%)",
        'light-three': "hsl(176, 52.9%, 30.8%)",
        'light-four': "hsl(172, 43.7%, 62.4%)",
        //dark-mode
        'dark-one': "#242424",
        'dark-two': "#FCF951FF",
        'dark-three': "#f8f8ff",
        'dark-four': "hsl(248, 52.5%, 43.7%)",
        'dark-five': "#331940",
      },
      animation: {
        'rotation': 'spinner 2s ease-in-out infinite'
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
