import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { BsArrowBarLeft } from 'react-icons/bs'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import { TiEquals } from 'react-icons/ti'
import { RiDivideLine } from 'react-icons/ri'
import { defaultPad } from './pad'

class Home extends React.Component {
  render () {
    const mainDiv = {
      height: '100vh'
    }

    const resultScreen = {
      height: '40%',
      width: '100%',
      background: '#fefefe',
      color: 'black',
      textAlign: 'center'
    }

    return (
      <div style={mainDiv}>
        <div style={resultScreen}>
            coucou
        </div>
      </div>
    )
  }
}

export default Home
