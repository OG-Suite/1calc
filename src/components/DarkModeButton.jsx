import React, { useState } from 'react'

import { FiMoon, FiSun } from 'react-icons/fi'

export const DarkModeButton = () => {
  const [themeDark, setThemeDark] = useState(false)

  function darkMode () {
    if (document.querySelector('html').classList.contains('dark')) {
      document.querySelector('html').classList.remove('dark')
      console.log('Light Mode')
      setThemeDark(false)
    } else {
      document.querySelector('html').classList.add('dark')
      console.log('Dark Mode')
      setThemeDark(true)
    }
  }
  return (
    <div className="absolute right-2 top-2 cursor-pointer z-10" onClick={darkMode}>{themeDark ? <FiMoon /> : <FiSun />}</div>
  )
}
