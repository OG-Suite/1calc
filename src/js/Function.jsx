const styleFonction = 'flex-1 hover:bg-blue-200 dark:hover:bg-blue-700 h-full focus:outline-none'

const FuncINV = {
  key: 'INV',
  onClick: () => {
    console.log('inv')
  },
  isINV: true,
  style: styleFonction,
  slot: 'INV'
}

const FuncDEG = {
  key: 'DEG',
  onClick: () => {
    console.log('deg')
  },
  style: styleFonction,
  slot: 'DEG'
}

const FuncSIN = {
  key: 'SIN',
  onClick: () => {
    console.log('sin')
  },
  style: styleFonction,
  slot: 'SIN'
}

const FuncARCSIN = {
  key: 'arcSIN',
  onClick: () => {
    console.log('arcsin')
  },
  style: styleFonction,
  slot: 'arcSIN'
}

const FuncCOS = {
  key: 'COS',
  onClick: () => {
    console.log('cos')
  },
  style: styleFonction,
  slot: 'COS'
}

const FuncARCCOS = {
  key: 'arcCOS',
  onClick: () => {
    console.log('arccos')
  },
  style: styleFonction,
  slot: 'arcCOS'
}

const FuncTAN = {
  key: 'TAN',
  onClick: () => {
    console.log('tan')
  },
  style: styleFonction,
  slot: 'TAN'
}

const FuncARCTAN = {
  key: 'arcTAN',
  onClick: () => {
    console.log('arctan')
  },
  style: styleFonction,
  slot: 'arcTAN'
}

const FuncMOD = {
  key: '%',
  onClick: () => {
    console.log('modulo')
  },
  style: styleFonction,
  slot: '%'
}

const FuncLN = {
  key: 'ln',
  onClick: () => {
    console.log('ln')
  },
  style: styleFonction,
  slot: 'ln'
}

const FuncLOG = {
  key: 'log',
  onClick: () => {
    console.log('log')
  },
  style: styleFonction,
  slot: 'log'
}

const FuncSQROOT = {
  key: '√',
  onClick: () => {
    console.log('√')
  },
  style: styleFonction,
  slot: '√'
}

const FuncEXP = {
  key: '^',
  onClick: () => {
    console.log('^')
  },
  style: styleFonction,
  slot: '^'
}

const FuncPI = {
  key: 'π',
  onClick: () => {
    console.log('π')
  },
  style: styleFonction,
  slot: 'π'
}

const FuncE = {
  key: 'e',
  onClick: () => {
    console.log('e')
  },
  style: styleFonction,
  slot: 'e'
}

const LeftParenthese = {
  key: '(',
  onClick: () => {
    console.log('(')
  },
  style: styleFonction,
  slot: '('
}

const RightParenthese = {
  key: ')',
  onClick: () => {
    console.log(')')
  },
  style: styleFonction,
  slot: ')'
}

const FuncOPPOSITE = {
  key: '!',
  onClick: () => {
    console.log('!')
  },
  style: styleFonction,
  slot: '!'
}

const FuncEX = {
  key: 'e^x',
  onClick: () => {
    console.log('e^x')
  },
  style: styleFonction,
  slot: 'e^x'
}

const FuncTENX = {
  key: '10^',
  onClick: () => {
    console.log('10^')
  },
  style: styleFonction,
  slot: '10^'
}

const FuncXSQUARE = {
  key: 'x^2',
  onClick: () => {
    console.log('x^2')
  },
  style: styleFonction,
  slot: 'x^2'
}

export const FunctionPad = [
  [FuncINV, FuncDEG, FuncSIN, FuncCOS, FuncTAN],
  [FuncMOD, FuncLN, FuncLOG, FuncSQROOT, FuncEXP],
  [FuncPI, FuncE, LeftParenthese, RightParenthese, FuncOPPOSITE]
]

export const invFunctionPad = [
  [FuncINV, FuncDEG, FuncARCSIN, FuncARCCOS, FuncARCTAN],
  [FuncMOD, FuncEX, FuncTENX, FuncXSQUARE, FuncEXP],
  [FuncPI, FuncE, LeftParenthese, RightParenthese, FuncOPPOSITE]
]
