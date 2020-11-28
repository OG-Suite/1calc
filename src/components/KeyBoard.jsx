import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'

import { defaultPad } from '../js/Pad'
import { defaultFunction } from '../js/Fonction'

export const KeyBoard = (props) => {
  const fonctionTouch = []
  for (const [key, element] of Object.entries(defaultFunction)) {
    const row = []
    for (const func of element) {
      row.push(<Button key={func.value} className={func.styleButton} value={func.value} function={func.onClick}/>)
    }
    fonctionTouch.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
  }

  const padTouch = []
  for (const [key, element] of Object.entries(defaultPad)) {
    const row = []
    for (const pad of element) {
      row.push(<Button key={pad.value} className={pad.styleButton} value={pad.value} isDisabled={pad.isNull} function={pad.onClick}/>)
    }
    padTouch.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
  }

  return (
    <>
      <div className='flex-1 flex flex-col flex-nowrap bg-blue-300 dark:bg-blue-800'>
        {fonctionTouch}
      </div>
      <div className='flex-1 flex flex-col flex-nowrap bg-gray-300 dark:bg-gray-800'>
        {padTouch}
      </div>
    </>
  )
}

KeyBoard.propTypes = {
  fonction: PropTypes.bool,
  pad: PropTypes.bool
}
