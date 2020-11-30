import React from 'react'

import { Keyboard } from '../components/Keyboard'
import { DarkModeButton } from '../components/DarkModeButton'
import { Screen } from '../components/Screen'
import { ShowFunc } from '../components/ShowFunc'

class Home extends React.Component {
  render () {
    // DarkMode default
    document.querySelector('html').classList.add('dark')

    return (
      <div className='flex flex-col flex-no-wrap text-gray-800 dark:text-gray-200 h-screen bg-gray-100'>
        <DarkModeButton />
        <div className='flex-1 flex flex-col flex-nowrap'>
          <Screen />
          <ShowFunc />
          <Keyboard />
        </div>
      </div>
    )
  }
}

export default Home
