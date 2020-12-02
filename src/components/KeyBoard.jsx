import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'

import { numberSide, operatorSide } from '../js/Pad'
import { defaultFunction, invFunction } from '../js/Fonction'

export const Keyboard = (props) => {
  const fonctionTouch = []
  const [invOrNot, setInvOrNot] = useState(false)
  if (invOrNot) {
    for (const [key, element] of Object.entries(defaultFunction)) {
      const row = []
      for (const func of element) {
        row.push(<Button key={func.key} className={func.style} icon={func.icon} function={func.isINV ? () => setInvOrNot(!invOrNot) : func.onClick}/>)
      }
      fonctionTouch.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
    }
  } else {
    for (const [key, element] of Object.entries(invFunction)) {
      const row = []
      for (const func of element) {
        row.push(<Button key={func.key} className={func.style} icon={func.icon} function={func.isINV ? () => setInvOrNot(!invOrNot) : func.onClick}/>)
      }
      fonctionTouch.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
    }
  }

  const padNumber = []
  for (const [key, element] of Object.entries(numberSide)) {
    const row = []
    for (const pad of element) {
      row.push(<Button key={pad.key} className={pad.style} icon={pad.icon} isDisabled={pad.isNull} function={pad.onClick}/>)
    }
    padNumber.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
  }

  const padOperator = []
  for (const [key, element] of Object.entries(operatorSide)) {
    const row = []
    for (const pad of element) {
      row.push(<Button key={pad.key} className={pad.style} icon={pad.icon} isDisabled={pad.isNull} function={pad.onClick}/>)
    }
    padOperator.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
  }

  // const fonctionStyle = {
  //   maxHeight: '25vh'
  // }
  const padStyle = {
    minHeight: '50vh'
  }
  const numberStyle = {
    width: '70%'
  }
  const operatorStyle = {
    width: '30%',
    boxShadow: '#ffffff21 1px 0 inset'
  }

  return (
    <>
      {/* Hide FunctionPanel default */}
      <div className='flex-1 flex flex-col flex-nowrap bg-blue-300 dark:bg-blue-800'>
        {fonctionTouch}
      </div>
      <div className='flex-1 flex flex-row flex-nowrap bg-gray-300 dark:bg-gray-800' style={padStyle}>
        <div className="flex flex-col flex-nowrap" style={numberStyle}>
          {padNumber}
        </div>
        <div className="flex flex-col flex-nowrap" style={operatorStyle}>
          {padOperator}
        </div>
      </div>
    </>
  )
}

Keyboard.propTypes = {
  fonction: PropTypes.bool,
  pad: PropTypes.bool
}
