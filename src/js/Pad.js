const styleNumber = 'flex-1 h-full hover:bg-gray-200 dark:hover:bg-gray-700'
const stylePadNull = 'flex-1 h-full cursor-default'
const styleSign = 'flex-1 h-full hover:bg-gray-200 dark:hover:bg-gray-700 text-blue-800 dark:text-blue-300'

let padNullIndex = -1

const PadNull = () => {
  padNullIndex--
  return {
    value: String(padNullIndex),
    onClick: () => {},
    isNull: true,
    styleButton: stylePadNull
  }
}

const PadDot = {
  value: '.',
  onClick: () => {
    console.log('.')
  },
  styleButton: styleNumber
}

const Pad0 = {
  value: '0',
  onClick: () => {
    console.log('0')
  },
  styleButton: styleNumber
}

const Pad1 = {
  value: '1',
  onClick: () => {
    console.log('1')
  },
  styleButton: styleNumber
}

const Pad2 = {
  value: '2',
  onClick: () => {
    console.log('2')
  },
  styleButton: styleNumber
}

const Pad3 = {
  value: '3',
  onClick: () => {
    console.log('3')
  },
  styleButton: styleNumber
}

const Pad4 = {
  value: '4',
  onClick: () => {
    console.log('4')
  },
  styleButton: styleNumber
}

const Pad5 = {
  value: '5',
  onClick: () => {
    console.log('5')
  },
  styleButton: styleNumber
}

const Pad6 = {
  value: '6',
  onClick: () => {
    console.log('6')
  },
  styleButton: styleNumber
}

const Pad7 = {
  value: '7',
  onClick: () => {
    console.log('7')
  },
  styleButton: styleNumber
}

const Pad8 = {
  value: '8',
  onClick: () => {
    console.log('8')
  },
  styleButton: styleNumber
}

const Pad9 = {
  value: '9',
  onClick: () => {
    console.log('9')
  },
  styleButton: styleNumber
}

const PadDivision = {
  value: '÷',
  onClick: () => {
    console.log('/')
  },
  icon: '<RiDivideLine />',
  styleButton: styleSign
}

const PadMultiplication = {
  value: '×',
  onClick: () => {
    console.log('*')
  },
  icon: '<BiPlus />',
  styleButton: styleSign
}

const PadSubstraction = {
  value: '-',
  onClick: () => {
    console.log('-')
  },
  icon: '<BiMinus />',
  styleButton: styleSign
}

const PadAddition = {
  value: '+',
  onClick: () => {
    console.log('+')
  },
  icon: '<BiPlus />',
  styleButton: styleSign
}

const PadDelete = {
  value: '<-',
  onClick: () => {
    console.log('+')
  },
  icon: '<FiDelete />',
  styleButton: styleSign
}

const PadEqual = {
  value: '=',
  onClick: () => {
    console.log('+')
  },
  icon: '<TiEquals />',
  styleButton: styleSign
}

export const defaultPad = [
  [Pad7, Pad8, Pad9, PadDivision, PadDelete],
  [Pad4, Pad5, Pad6, PadMultiplication, PadNull()],
  [Pad1, Pad2, Pad3, PadSubstraction, PadNull()],
  [Pad0, PadDot, PadNull(), PadAddition, PadEqual]
]
