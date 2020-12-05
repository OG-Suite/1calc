import React from 'react'

import Home from '@/pages/Home'
import { Bubble } from '@/components/Bubble'

export class Default extends React.Component {
  render () {
    return (
      <>
      {import.meta.env.MODE === 'development' ? <Bubble /> : null}
      <div className="w-screen xl:max-w-screen-md h-full xl:h-10/12 xl:rounded-lg overflow-hidden shadow-soft absolute-center">
        <Home />
      </div>
      </>
    )
  }
}
