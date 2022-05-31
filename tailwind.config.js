module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fill: (theme) => ({
      primary: theme('colors.purple.700'),
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
      white: theme('colors.slate.100'),
    }),
    extend: {
      // backgroundImage: {
      //   'footer-texture': 'url(/assets/images/bg-home.svg)',
      // },
    },
  },
  variants: {
    extend: {},
  },
  content: ['./node_modules/flowbite/**/*.js'],
  plugins: [require('flowbite/plugin')],
}
