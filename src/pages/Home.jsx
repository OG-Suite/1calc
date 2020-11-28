import React from 'react'

import { Button } from '../components/Button'
import { DarkButton } from '../components/DarkButton'
import { Screen } from '../components/Screen'

class Home extends React.Component {
  render () {
    return (
      <div className='flex flex-col flex-no-wrap dark:text-white h-screen'>
        <DarkButton />
        <div className='flex-1 flex flex-col flex-nowrap'>
          <Screen />
          <Button fonction />
          <Button pad/>
        </div>
      </div>
    )
  }
}

export default Home
