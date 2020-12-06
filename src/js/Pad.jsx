import { RiDeleteBack2Fill } from 'react-icons/ri'
import { FaEquals, FaDivide, FaMinus, FaPlus } from 'react-icons/fa'
import React from 'react'

let padNullIndex = -1

const PadNull = () => {
  padNullIndex--
  return {
    key: String(padNullIndex),
    onClick: () => {},
    isNull: true,
    className: 'flex-1 cursor-default',
    slot: ''
  }
}

const PadDot = {
  key: '.',
  onClick: () => {
    console.log('.')
  },
  slot: '.'
}

const Pad0 = {
  key: '0',
  onClick: () => {
    console.log('0')
  },
  slot: '0'
}

const Pad1 = {
  key: '1',
  onClick: () => {
    console.log('1')
  },
  slot: '1'
}

const Pad2 = {
  key: '2',
  onClick: () => {
    console.log('2')
  },
  slot: '2'
}

const Pad3 = {
  key: '3',
  onClick: () => {
    console.log('3')
  },
  slot: '3'
}

const Pad4 = {
  key: '4',
  onClick: () => {
    console.log('4')
  },
  slot: '4'
}

const Pad5 = {
  key: '5',
  onClick: () => {
    console.log('5')
  },
  slot: '5'
}

const Pad6 = {
  key: '6',
  onClick: () => {
    console.log('6')
  },
  slot: '6'
}

const Pad7 = {
  key: '7',
  onClick: () => {
    console.log('7')
  },
  slot: '7'
}

const Pad8 = {
  key: '8',
  onClick: () => {
    console.log('8')
  },
  slot: '8'
}

const Pad9 = {
  key: '9',
  onClick: () => {
    console.log('9')
  },
  slot: '9'
}

const PadDivision = {
  key: '÷',
  onClick: () => {
    console.log('÷')
  },
  slot: <FaDivide className="mx-auto"/>
}

const PadMultiplication = {
  key: '×',
  onClick: () => {
    console.log('*')
  },
  slot: <FaPlus className="mx-auto transform rotate-45"/>
}

const PadSubstraction = {
  key: '-',
  onClick: () => {
    console.log('-')
  },
  slot: <FaMinus className="mx-auto"/>
}

const PadAddition = {
  key: '+',
  onClick: () => {
    console.log('+')
  },
  slot: <FaPlus className="mx-auto"/>
}

const PadDelete = {
  key: '<-',
  onClick: () => {
    console.log('<-')
  },
  slot: <RiDeleteBack2Fill className="mx-auto"/>
}

const PadEqual = {
  key: '=',
  onClick: () => {
    console.log('=')
  },
  slot: <FaEquals className="mx-auto"/>
}

export const NumberPad = [
  [Pad7, Pad8, Pad9],
  [Pad4, Pad5, Pad6],
  [Pad1, Pad2, Pad3],
  [Pad0, PadDot, PadNull()]
]

export const OperatorPad = [
  [PadDivision, PadDelete],
  [PadMultiplication, PadNull()],
  [PadSubstraction, PadNull()],
  [PadAddition, PadEqual]
]
