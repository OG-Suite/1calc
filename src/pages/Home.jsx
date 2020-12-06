import React from 'react'

// import { DarkModeButton } from '@/components/DarkModeButton'
// import { Screen } from '@/components/Screen'
// import { ShowFunc } from '@/components/ShowFunc'
import Keypad from '@/components/Keypad'

import { NumberPad, OperatorPad } from '@/js/Pad'
import { FunctionPad, invFunctionPad } from '@/js/Function'

const NumPad = () => {
  return (
    <Keypad
      keypad={NumberPad}
      className="select-none h-full flex-2 flex flex-col flex-nowrap text-md"
      rowClass="flex-1 flex flex-row flex-nowrap justify-around"
      padClass="flex-1 dark:active:bg-gray-700 focus:outline-none outline-none" />
  )
}

const OperationPad = () => {
  return (
    <Keypad
      keypad={OperatorPad}
      className="select-none h-full flex-1 flex flex-col flex-nowrap text-md border-gray-700 border-l-2"
      rowClass="flex-1 flex flex-row flex-nowrap justify-around"
      padClass="flex-1 dark:active:bg-gray-700 focus:outline-none" />
  )
}

const FunPad = () => {
  return (
    <Keypad
      keypad={FunctionPad}
      className="select-none h-full flex-1 flex flex-col flex-nowrap text-md border-gray-700"
      rowClass="flex-1 flex flex-row flex-nowrap justify-around"
      padClass="flex-1 dark:active:bg-blue-700 focus:outline-none" />
  )
}

const invFunPad = () => {
  return (
    <Keypad
      keypad={invFunctionPad}
      className="select-none h-full flex-1 flex flex-col flex-nowrap text-md border-gray-700"
      rowClass="flex-1 flex flex-row flex-nowrap justify-around"
      padClass="flex-1 dark:active:bg-blue-700 focus:outline-none" />
  )
}

class Home extends React.Component {
  render () {
    // DarkMode default
    document.querySelector('html').classList.add('dark')

    return (
      <div className='h-full flex flex-col flex-nowrap'>
        <div className="bg-gray-700 flex-1"></div>
        <div className="dark:bg-blue-800 dark:text-white flex-1 flex-row flex-nowrap">
          <FunPad />
        </div>
        <div className="dark:bg-gray-800 dark:text-white flex-2 text-2xl flex flex-row flex-nowrap">
          <NumPad />
          <OperationPad />
        </div>
      </div>
    )
  }
}

export default Home

/* <div className="hidden">
          <DarkModeButton />
          <div className='flex flex-col flex-nowrap'>
            <Screen />
            <ShowFunc />
          </div>
        </div> */
