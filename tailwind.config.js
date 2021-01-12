module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
        colors: {
            link: '#2D70B5'
        },
    },
    fontFamily: {
        content: ['Open Sans', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
