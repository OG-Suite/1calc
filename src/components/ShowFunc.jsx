import React, { useState } from 'react'

import { BsArrowBarUp, BsArrowBarDown } from 'react-icons/bs'

export const ShowFunc = () => {
  const [Negrel, setNegrel] = useState(true)
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
    <div className>
      <div className="cursor-pointer" onClick={showFunction}><strong>{Negrel ? <BsArrowBarUp /> : <BsArrowBarDown />}</strong></div>
    </div>
  )
}
