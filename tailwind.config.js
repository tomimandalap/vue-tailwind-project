module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fill: (theme) => ({
      primary: theme('colors.purple.700'),
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
