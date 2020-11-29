import React from 'react'

import { Keyboard } from '../components/Keyboard'
import { DarkButton } from '../components/DarkButton'
import { Screen } from '../components/Screen'

class Home extends React.Component {
  render () {
    // DarkMode default
    document.querySelector('html').classList.add('dark')

    return (
      <div className='flex flex-col flex-no-wrap text-gray-800 dark:text-gray-200 h-screen bg-gray-100'>
        <DarkButton />
        <div className='flex-1 flex flex-col flex-nowrap'>
          <Screen />
          <Keyboard />
        </div>
      </div>
    )
  }
}

export default Home
