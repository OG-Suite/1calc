const styleFonction = 'flex-1 hover:bg-blue-200 dark:hover:bg-blue-700 h-full focus:outline-none'

const FuncINV = {
  key: 'INV',
  onClick: () => {
    console.log('inv')
  },
  isINV: true,
  style: styleFonction,
  icon: 'INV'
}

const FuncDEG = {
  key: 'DEG',
  onClick: () => {
    console.log('deg')
  },
  style: styleFonction,
  icon: 'DEG'
}

const FuncSIN = {
  key: 'SIN',
  onClick: () => {
    console.log('sin')
  },
  style: styleFonction,
  icon: 'SIN'
}

const FuncARCSIN = {
  key: 'arcSIN',
  onClick: () => {
    console.log('arcsin')
  },
  style: styleFonction,
  icon: 'arcSIN'
}

const FuncCOS = {
  key: 'COS',
  onClick: () => {
    console.log('cos')
  },
  style: styleFonction,
  icon: 'COS'
}

const FuncARCCOS = {
  key: 'arcCOS',
  onClick: () => {
    console.log('arccos')
  },
  style: styleFonction,
  icon: 'arcCOS'
}

const FuncTAN = {
  key: 'TAN',
  onClick: () => {
    console.log('tan')
  },
  style: styleFonction,
  icon: 'TAN'
}

const FuncARCTAN = {
  key: 'arcTAN',
  onClick: () => {
    console.log('arctan')
  },
  style: styleFonction,
  icon: 'arcTAN'
}

const FuncMOD = {
  key: '%',
  onClick: () => {
    console.log('modulo')
  },
  style: styleFonction,
  icon: '%'
}

const FuncLN = {
  key: 'ln',
  onClick: () => {
    console.log('ln')
  },
  style: styleFonction,
  icon: 'ln'
}

const FuncLOG = {
  key: 'log',
  onClick: () => {
    console.log('log')
  },
  style: styleFonction,
  icon: 'log'
}

const FuncSQROOT = {
  key: '√',
  onClick: () => {
    console.log('√')
  },
  style: styleFonction,
  icon: '√'
}

const FuncEXP = {
  key: '^',
  onClick: () => {
    console.log('^')
  },
  style: styleFonction,
  icon: '^'
}

const FuncPI = {
  key: 'π',
  onClick: () => {
    console.log('π')
  },
  style: styleFonction,
  icon: 'π'
}

const FuncE = {
  key: 'e',
  onClick: () => {
    console.log('e')
  },
  style: styleFonction,
  icon: 'e'
}

const LeftParenthese = {
  key: '(',
  onClick: () => {
    console.log('(')
  },
  style: styleFonction,
  icon: '('
}

const RightParenthese = {
  key: ')',
  onClick: () => {
    console.log(')')
  },
  style: styleFonction,
  icon: ')'
}

const FuncOPPOSITE = {
  key: '!',
  onClick: () => {
    console.log('!')
  },
  style: styleFonction,
  icon: '!'
}

const FuncEX = {
  key: 'e^x',
  onClick: () => {
    console.log('e^x')
  },
  style: styleFonction,
  icon: 'e^x'
}

const FuncTENX = {
  key: '10^',
  onClick: () => {
    console.log('10^')
  },
  style: styleFonction,
  icon: '10^'
}

const FuncXSQUARE = {
  key: 'x^2',
  onClick: () => {
    console.log('x^2')
  },
  style: styleFonction,
  icon: 'x^2'
}

export const defaultFunction = [
  [FuncINV, FuncDEG, FuncSIN, FuncCOS, FuncTAN],
  [FuncMOD, FuncLN, FuncLOG, FuncSQROOT, FuncEXP],
  [FuncPI, FuncE, LeftParenthese, RightParenthese, FuncOPPOSITE]
]

export const invFunction = [
  [FuncINV, FuncDEG, FuncARCSIN, FuncARCCOS, FuncARCTAN],
  [FuncMOD, FuncEX, FuncTENX, FuncXSQUARE, FuncEXP],
  [FuncPI, FuncE, LeftParenthese, RightParenthese, FuncOPPOSITE]
]
