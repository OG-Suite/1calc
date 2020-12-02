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

  return (
    <>
      {/* Hide FunctionPanel default */}
      <div className='flex-1 flex flex-col flex-nowrap bg-blue-300 dark:bg-blue-800 hidden' id='function-touch'>
        {fonctionTouch}
      </div>
      <div className='flex-1 flex flex-row flex-nowrap bg-gray-300 dark:bg-gray-800'>
        <div className="flex flex-1 flex-col flex-nowrap">
          {padNumber}
        </div>
        <div className="flex flex-1 flex-col flex-nowrap border-l border-blue-900">
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
