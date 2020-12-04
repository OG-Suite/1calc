import { RiDeleteBack2Fill } from 'react-icons/ri'
import { FaEquals, FaDivide, FaMinus, FaPlus } from 'react-icons/fa'
import React from 'react'

const styleNumber = 'flex-1 h-full hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none font-bold'
const stylePadNull = 'flex-1 h-full cursor-default'
const styleOperator = 'flex-1 h-full hover:bg-gray-200 dark:hover:bg-gray-600 text-blue-800 dark:text-blue-300 focus:outline-none'

let padNullIndex = -1

const PadNull = () => {
  padNullIndex--
  return {
    key: String(padNullIndex),
    onClick: () => {},
    isNull: true,
    style: stylePadNull,
    icon: String(padNullIndex)
  }
}

const PadDot = {
  key: '.',
  onClick: () => {
    console.log('.')
  },
  style: styleNumber,
  icon: '.'
}

const Pad0 = {
  key: '0',
  onClick: () => {
    console.log('0')
  },
  style: styleNumber,
  icon: '0'
}

const Pad1 = {
  key: '1',
  onClick: () => {
    console.log('1')
  },
  style: styleNumber,
  icon: '1'
}

const Pad2 = {
  key: '2',
  onClick: () => {
    console.log('2')
  },
  style: styleNumber,
  icon: '2'
}

const Pad3 = {
  key: '3',
  onClick: () => {
    console.log('3')
  },
  style: styleNumber,
  icon: '3'
}

const Pad4 = {
  key: '4',
  onClick: () => {
    console.log('4')
  },
  style: styleNumber,
  icon: '4'
}

const Pad5 = {
  key: '5',
  onClick: () => {
    console.log('5')
  },
  style: styleNumber,
  icon: '5'
}

const Pad6 = {
  key: '6',
  onClick: () => {
    console.log('6')
  },
  style: styleNumber,
  icon: '6'
}

const Pad7 = {
  key: '7',
  onClick: () => {
    console.log('7')
  },
  style: styleNumber,
  icon: '7'
}

const Pad8 = {
  key: '8',
  onClick: () => {
    console.log('8')
  },
  style: styleNumber,
  icon: '8'
}

const Pad9 = {
  key: '9',
  onClick: () => {
    console.log('9')
  },
  style: styleNumber,
  icon: '9'
}

const PadDivision = {
  key: '÷',
  onClick: () => {
    console.log('÷')
  },
  icon: <FaDivide className="mx-auto"/>,
  style: styleOperator
}

const PadMultiplication = {
  key: '×',
  onClick: () => {
    console.log('*')
  },
  icon: <span className="font-bold">×</span>,
  style: styleOperator
}

const PadSubstraction = {
  key: '-',
  onClick: () => {
    console.log('-')
  },
  icon: <FaMinus className="mx-auto"/>,
  style: styleOperator
}

const PadAddition = {
  key: '+',
  onClick: () => {
    console.log('+')
  },
  icon: <FaPlus className="mx-auto"/>,
  style: styleOperator
}

const PadDelete = {
  key: '<-',
  onClick: () => {
    console.log('<-')
  },
  icon: <RiDeleteBack2Fill className="mx-auto"/>,
  style: styleOperator
}

const PadEqual = {
  key: '=',
  onClick: () => {
    console.log('=')
  },
  icon: <FaEquals className="mx-auto"/>,
  style: styleOperator
}

export const numberSide = [
  [Pad7, Pad8, Pad9],
  [Pad4, Pad5, Pad6],
  [Pad1, Pad2, Pad3],
  [Pad0, PadDot, PadNull()]
]

export const operatorSide = [
  [PadDivision, PadDelete],
  [PadMultiplication, PadNull()],
  [PadSubstraction, PadNull()],
  [PadAddition, PadEqual]
]
