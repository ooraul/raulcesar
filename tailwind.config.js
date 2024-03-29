module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'grande': '40px',
      'medio': '20px',
      'voltar': '18px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
