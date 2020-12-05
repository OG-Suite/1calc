const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'public/**/*.html'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'development' ? [] : [purgecss, cssnano]
  ]
}
