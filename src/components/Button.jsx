import React from 'react'
import PropTypes from 'prop-types'

import { defaultPad } from '../pages/Pad'
import { defaultFunction } from '../pages/Fonction'

export const Button = (props) => {
  if (props.fonction) {
    const fonctionTouch = []
    for (const [key, element] of Object.entries(defaultFunction)) {
      const row = []
      for (const func of element) {
        row.push(<button key={func.value} className="flex-1 hover:bg-blue-100 dark:hover:bg-blue-700 h-full">{func.value}</button>)
      }
      fonctionTouch.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
    }
    return (
      <div className='flex-1 flex flex-col flex-nowrap bg-blue-200 dark:bg-blue-800'>
        {fonctionTouch}
      </div>
    )
  } else if (props.pad) {
    const padTouch = []
    for (const [key, element] of Object.entries(defaultPad)) {
      const row = []
      for (const pad of element) {
        row.push(<button key={pad.value} className={pad.isNull ? 'flex-1 h-full cursor-default' : 'flex-1 h-full hover:bg-gray-100 dark:hover:bg-gray-700'} disabled={pad.isNull}>{pad.isNull ? ' ' : pad.value}</button>)
      }
      padTouch.push(<div key={key} className="flex flex-1 items-center">{row}</div>)
    }
    return (
      <div className='flex-1 flex flex-col flex-nowrap bg-gray-200 dark:bg-gray-800'>
        {padTouch}
    </div>
    )
  } else {
    return (
      <p>Button non reconnu</p>
    )
  }
}

Button.propTypes = {
  fonction: PropTypes.bool,
  pad: PropTypes.bool
}
