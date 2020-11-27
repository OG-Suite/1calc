import React from 'react'
import { Button } from '@material-ui/core'
import { defaultPad } from './Pad'
import { defaultFunction } from './Fonction'
import './homeStyle.css'

class Home extends React.Component {
  showFunctionBar () {
    console.log('work')
  }

  render () {
    const whiteText = {
      color: 'white'
    }

    const fonctionTouch = []
    for (const [key, element] of Object.entries(defaultFunction)) {
      const row = []
      for (const func of element) {
        row.push(<Button key={func.value} className="function" style={whiteText}>{func.value}</Button>)
      }
      fonctionTouch.push(<div key={key} className="function-row">{row}</div>)
    }

    const padTouch = []
    for (const [key, element] of Object.entries(defaultPad)) {
      const row = []
      for (const pad of element) {
        row.push(<Button key={pad.value} className="pad" style={whiteText} disabled={pad.isNull}>{pad.isNull ? ' ' : pad.value}</Button>)
      }
      padTouch.push(<div key={key} className="pad-row">{row}</div>)
    }

    return (
      <div className='main'>
        <div className='result-section'>
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
            Ca fait 34<br />
        </div>
        <div className='fonction-section'>
          <div className='fonction-section-show' onClick={this.showFunctionBar.bind(this)}> </div>
          { fonctionTouch }
        </div>
        <div className='pad-section'>
          { padTouch }
        </div>
      </div>
    )
  }
}

export default Home
