import React from 'react'
import { ShowFunc } from './ShowFunc'

export const Screen = () => {
  return (
    <div className='flex-1 dark:bg-gray-700 relative'>
      <div className='absolute bottom-6'>
        <ShowFunc />
      </div>
    </div>
  )
}
