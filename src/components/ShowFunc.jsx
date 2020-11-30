import React, { useState } from 'react'

import { CgLoadbar } from 'react-icons/cg'

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
  <div className="bg-blue-300 dark:bg-blue-800 w-screen inline text-center py-1">
    {<CgLoadbar onClick={showFunction} className="cursor-pointer  mx-auto"/>}
  </div>
  )
}
