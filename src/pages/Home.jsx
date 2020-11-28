import React from 'react'

import { FiMoon } from 'react-icons/fi'

import { defaultPad } from './Pad'
import { defaultFunction } from './Fonction'

class Home extends React.Component {
  render () {
    const fonctionTouch = []
    for (const [key, element] of Object.entries(defaultFunction)) {
      const row = []
      for (const func of element) {
        row.push(<button key={func.value} className="flex-1 dark:hover:bg-blue-700">{func.value}</button>)
      }
      fonctionTouch.push(<div key={key} className="flex items-center">{row}</div>)
    }

    const padTouch = []
    for (const [key, element] of Object.entries(defaultPad)) {
      const row = []
      for (const pad of element) {
        row.push(<button key={pad.value} className="flex-1 dark:hover:bg-gray-700" disabled={pad.isNull}>{pad.isNull ? ' ' : pad.value}</button>)
      }
      padTouch.push(<div key={key} className="flex items-center">{row}</div>)
    }

    function checkDarkMode () {
      if (window.matchMedia('(prefers-color-scheme: dark)')) {
        return true
      } else {
        return false
      }
    }
    const html = document.getElementsByTagName('html')[0].attributes
    console.log(html.contains('dark-mode'))

    if (checkDarkMode()) {
      document.documentElement.classList.add('mode-dark')
    } else {
      document.documentElement.classList.remove('mode-dark')
    }

    console.log(checkDarkMode())
    return (
      <div className='flex flex-col flex-no-wrap'>
        <div className="absolute right-2 top-2"><FiMoon /></div>
        <div className='dark:bg-gray-700'>
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
        </div>
        <div className='flex flex-col flex-nowrap dark:bg-blue-800 dark:white-text'>
            { fonctionTouch }
        </div>
        <div className='flex flex-col flex-nowrap dark:bg-gray-800 dark:white-text'>
          { padTouch }
        </div>
      </div>
    )
  }
}

export default Home
