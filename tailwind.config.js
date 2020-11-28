module.exports = {
  purge: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'responsive', 'focus', 'dark', 'dark-hover'],
      textColor: ['hover', 'responsive', 'focus', 'dark', 'dark-hover']
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}

// darkMode : false
