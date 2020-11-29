const styleFonction = 'flex-1 hover:bg-blue-200 dark:hover:bg-blue-700 h-full'

const FuncINV = {
  value: 'INV',
  onClick: () => {
    console.log('inv')
  },
  isINV: true,
  styleButton: styleFonction
}

const FuncDEG = {
  value: 'DEG',
  onClick: () => {
    console.log('deg')
  },
  styleButton: styleFonction
}

const FuncSIN = {
  value: 'SIN',
  onClick: () => {
    console.log('sin')
  },
  styleButton: styleFonction
}

const FuncARCSIN = {
  value: 'arcSIN',
  onClick: () => {
    console.log('arcsin')
  },
  styleButton: styleFonction
}

const FuncCOS = {
  value: 'COS',
  onClick: () => {
    console.log('cos')
  },
  styleButton: styleFonction
}

const FuncARCCOS = {
  value: 'arcCOS',
  onClick: () => {
    console.log('arccos')
  },
  styleButton: styleFonction
}

const FuncTAN = {
  value: 'TAN',
  onClick: () => {
    console.log('tan')
  },
  styleButton: styleFonction
}

const FuncARCTAN = {
  value: 'arcTAN',
  onClick: () => {
    console.log('arctan')
  },
  styleButton: styleFonction
}

const FuncMOD = {
  value: '%',
  onClick: () => {
    console.log('modulo')
  },
  styleButton: styleFonction
}

const FuncLN = {
  value: 'ln',
  onClick: () => {
    console.log('ln')
  },
  styleButton: styleFonction
}

const FuncLOG = {
  value: 'log',
  onClick: () => {
    console.log('log')
  },
  styleButton: styleFonction
}

const FuncSQROOT = {
  value: '√',
  onClick: () => {
    console.log('√')
  },
  styleButton: styleFonction
}

const FuncEXP = {
  value: '^',
  onClick: () => {
    console.log('^')
  },
  styleButton: styleFonction
}

const FuncPI = {
  value: 'π',
  onClick: () => {
    console.log('π')
  },
  styleButton: styleFonction
}

const FuncE = {
  value: 'e',
  onClick: () => {
    console.log('e')
  },
  styleButton: styleFonction
}

const LeftParenthese = {
  value: '(',
  onClick: () => {
    console.log('(')
  },
  styleButton: styleFonction
}

const RightParenthese = {
  value: ')',
  onClick: () => {
    console.log(')')
  },
  styleButton: styleFonction
}

const FuncOPPOSITE = {
  value: '!',
  onClick: () => {
    console.log('!')
  },
  styleButton: styleFonction
}

const FuncEX = {
  value: 'e^x',
  onClick: () => {
    console.log('e^x')
  },
  styleButton: styleFonction
}

const FuncTENX = {
  value: '10^',
  onClick: () => {
    console.log('10^')
  },
  styleButton: styleFonction
}

const FuncXSQUARE = {
  value: 'x^2',
  onClick: () => {
    console.log('x^2')
  },
  styleButton: styleFonction
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
