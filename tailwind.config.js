module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgTheme': '#F80',
    }),
    extend: {
      colors: {
        'orange': '#F80',
      },
    },
  },
  plugins: [],
}
