import { TOKENS } from './tokens.js'

export const parse = (calcul) => {
  calcul = calcul.replace(/\s/g, '')

  const tokens = Object.entries(TOKENS).map(([key, token]) => token.regex ? token.regex.source : key)
  const regex = new RegExp(`(${tokens.join('|')})`, 'gmi')

  console.log(regex)

  const expression = calcul.split(regex).filter(r => r)
  console.log(expression)
}
