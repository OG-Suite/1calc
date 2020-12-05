const generator = require('./generator')

const flex = generator({}, { noUnit: true })
const height = generator({
  0: '0rem',
  screen: '100vh'
}, {
  std: true,
  percentage: true
})

module.exports = {
  purge: false,
  darkMode: 'class',
  theme: {
    extend: {
      flex,
      height
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
