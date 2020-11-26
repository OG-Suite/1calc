const PadNull = {
  value: '',
  onClick: () => {}
}

const PadDot = {
  value: '.',
  onClick: () => {
    console.log('.')
  }
}

const Pad0 = {
  value: '0',
  onClick: () => {
    console.log('0')
  }
}

const Pad1 = {
  value: '1',
  onClick: () => {
    console.log('1')
  }
}

const Pad2 = {
  value: '2',
  onClick: () => {
    console.log('2')
  }
}

const Pad3 = {
  value: '3',
  onClick: () => {
    console.log('3')
  }
}

const Pad4 = {
  value: '4',
  onClick: () => {
    console.log('4')
  }
}

const Pad5 = {
  value: '5',
  onClick: () => {
    console.log('5')
  }
}

const Pad6 = {
  value: '6',
  onClick: () => {
    console.log('6')
  }
}

const Pad7 = {
  value: '7',
  onClick: () => {
    console.log('7')
  }
}

const Pad8 = {
  value: '8',
  onClick: () => {
    console.log('8')
  }
}

const Pad9 = {
  value: '9',
  onClick: () => {
    console.log('9')
  }
}

const PadDivision = {
  value: '/',
  onClick: () => {
    console.log('/')
  },
  className: 'text-color-300'
}

const PadMultiplication = {
  value: '*',
  onClick: () => {
    console.log('*')
  }
}

const PadSubstraction = {
  value: '-',
  onClick: () => {
    console.log('-')
  }
}

const PadAddition = {
  value: '+',
  onClick: () => {
    console.log('+')
  }
}

export const defaultPad = [
  [Pad7, Pad8, Pad9, PadDivision],
  [Pad4, Pad5, Pad6, PadMultiplication],
  [Pad1, Pad2, Pad3, PadSubstraction],
  [Pad0, PadDot, PadNull, PadAddition]
]
