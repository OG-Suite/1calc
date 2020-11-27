const FuncINV = {
  value: 'inv',
  onClick: () => {
    console.log('inv')
  }
}

const FuncDEG = {
  value: 'deg',
  onClick: () => {
    console.log('deg')
  }
}

const FuncSIN = {
  value: 'sin',
  onClick: () => {
    console.log('sin')
  }
}

const FuncCOS = {
  value: 'cos',
  onClick: () => {
    console.log('cos')
  }
}

const FuncTAN = {
  value: 'tan',
  onClick: () => {
    console.log('tan')
  }
}

const FuncMOD = {
  value: '%',
  onClick: () => {
    console.log('modulo')
  }
}

const FuncLN = {
  value: 'ln',
  onClick: () => {
    console.log('ln')
  }
}

const FuncLOG = {
  value: 'log',
  onClick: () => {
    console.log('log')
  }
}

const FuncSQROOT = {
  value: '√',
  onClick: () => {
    console.log('√')
  }
}

const FuncEXP = {
  value: '^',
  onClick: () => {
    console.log('^')
  }
}

const FuncPI = {
  value: 'π',
  onClick: () => {
    console.log('π')
  }
}

const FuncE = {
  value: 'e',
  onClick: () => {
    console.log('e')
  }
}

const LeftParenthese = {
  value: '(',
  onClick: () => {
    console.log('(')
  }
}

const RightParenthese = {
  value: ')',
  onClick: () => {
    console.log(')')
  }
}

const FuncOPOSITE = {
  value: '!',
  onClick: () => {
    console.log('!')
  }
}

export const defaultFunction = [
  [FuncINV, FuncDEG, FuncSIN, FuncCOS, FuncTAN],
  [FuncMOD, FuncLN, FuncLOG, FuncSQROOT, FuncEXP],
  [FuncPI, FuncE, LeftParenthese, RightParenthese, FuncOPOSITE]
]
