import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { BsArrowBarLeft } from 'react-icons/bs'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { FiDelete } from 'react-icons/fi'
import { TiEquals } from 'react-icons/ti'
import { RiDivideLine } from 'react-icons/ri'

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

    const padScreen = {
      height: '60%',
      background: '#f1f3f4',
      boxShadow: 'inset 0px 1px 10px #d2d4d5',
      display: 'grid',
      gridTemplateRows: '100%',
      gridTemplateColumns: '73% 23% 4%'
    }

    const padNumber = {
      gridColumn: 1,
      gridRow: 1
    }

    const padSign = {
      gridColumn: 2,
      gridRow: 1
    }

    const multiplieIcon = {
      transform: 'rotate(45deg)'
    }

    const padSignFlex = {
      display: 'flex',
      flexDirection: 'column'
    }

    const padFeature = {
      gridColumn: 3,
      gridRow: 1,
      background: '#1a74e8',
      textAlign: 'center',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

    return (
      <div style={mainDiv}>
        <div style={resultScreen}>
            coucou
        </div>
        <div style={padScreen}>
          <div style={padNumber}>
            <Grid>
              <Button size="large">7</Button>
              <Button size="large">8</Button>
              <Button size="large">9</Button>
            </Grid>
            <Grid>
              <Button size="large">4</Button>
              <Button size="large">5</Button>
              <Button size="large">6</Button>
            </Grid>
            <Grid>
              <Button size="large">1</Button>
              <Button size="large">2</Button>
              <Button size="large">3</Button>
            </Grid>
            <Grid>
              <Button size="large">0</Button>
              <Button size="large">,</Button>
              <Button size="large"><TiEquals /></Button>
            </Grid>
          </div>
          <div style={padSign}>
            <div style={padSignFlex}>
              <Button size="large"><FiDelete /></Button>
              <Button size="large"><RiDivideLine /></Button>
              <Button size="large"><BiPlus style={multiplieIcon} /></Button>
              <Button size="large"><BiMinus /></Button>
              <Button size="large"><BiPlus /></Button>
            </div>
          </div>
          <div style={padFeature}>
            <div><BsArrowBarLeft /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
