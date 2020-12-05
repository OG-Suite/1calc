import React from 'react'

import { DarkModeButton } from '@/components/DarkModeButton'
import { Screen } from '@/components/Screen'
import { ShowFunc } from '@/components/ShowFunc'

class Home extends React.Component {
  render () {
    // DarkMode default
    document.querySelector('html').classList.add('dark')

    return (
      <div className='h-full flex flex-col flex-nowrap'>
        <div className="hidden">
          <DarkModeButton />
          <div className='flex flex-col flex-nowrap'>
            <Screen />
            <ShowFunc />
          </div>
        </div>

        <div className="bg-blue-500 flex-1"></div>
        <div className="bg-red-500 flex-1"></div>
        <div className="bg-green-500 flex-2"></div>
      </div>
    )
  }
}

export default Home
