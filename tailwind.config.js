module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'my-dark-one': '#253542',
      'my-light-white': '#ffffff',
     }),
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
