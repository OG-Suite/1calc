let padNullIndex = -1

const PadNull = () => {
  padNullIndex--
  return {
    value: String(padNullIndex),
    onClick: () => {},
    isNull: true
  }
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
  icon: '<RiDivideLine />'
}

const PadMultiplication = {
  value: 'x',
  onClick: () => {
    console.log('*')
  },
  icon: '<BiPlus />'
}

const PadSubstraction = {
  value: '-',
  onClick: () => {
    console.log('-')
  },
  icon: '<BiMinus />'
}

const PadAddition = {
  value: '+',
  onClick: () => {
    console.log('+')
  },
  icon: '<BiPlus />'
}

const PadDelete = {
  value: 'del',
  onClick: () => {
    console.log('+')
  },
  icon: '<FiDelete />'
}

const PadEqual = {
  value: '=',
  onClick: () => {
    console.log('+')
  },
  icon: '<TiEquals />'
}

export const defaultPad = [
  [Pad7, Pad8, Pad9, PadDivision, PadDelete],
  [Pad4, Pad5, Pad6, PadMultiplication, PadNull()],
  [Pad1, Pad2, Pad3, PadSubstraction, PadNull()],
  [Pad0, PadDot, PadNull(), PadAddition, PadEqual]
]
