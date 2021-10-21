module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgTheme': '#F80',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
