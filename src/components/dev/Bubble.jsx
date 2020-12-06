import React from 'react'

export class Bubble extends React.Component {
  render () {
    if (import.meta.env.MODE === 'development') {
      return (
      <div className="flex items-center justify-center fixed top-0 right-0 mt-12 mr-8 z-50 w-8 h-8 rounded-full text-gray-700 text-sm uppercase bg-gray-200 sm:bg-orange-200 md:bg-green-200 lg:bg-purple-200 xl:bg-red-200">
        <span className="block sm:hidden">all</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block">xl</span>
      </div>
      )
    }

    return (<></>)
  }
}
