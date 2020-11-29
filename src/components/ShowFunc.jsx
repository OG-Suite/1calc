import React, { useState } from 'react'

import { RiFunctionLine } from 'react-icons/ri'

export const ShowFunc = () => {
  const [Negrel, setNegrel] = useState(false)
  function showFunction () {
    if (Negrel) {
      document.querySelector('#function-touch').classList.remove('hidden')
      setNegrel(!Negrel)
      console.log('Function panel showed')
    } else {
      document.querySelector('#function-touch').classList.add('hidden')
      setNegrel(!Negrel)
      console.log('Function panel hidden')
    }
  }
  return (
    <div className="absolute left-2 top-2 cursor-pointer" onClick={showFunction}><RiFunctionLine /></div>
  )
}
