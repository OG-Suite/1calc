import React from 'react'
import Button from '@/components/Button'

class Default extends React.Component {
  constructor () {
    super()

    this.state = {
      result: 0,
      currentNumber: '',
      sign: '',
      numbers: []
    }

    this.handleResult = this.handleResult.bind(this)
    this.handleSign = this.handleSign.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  calculate (num1, sign, num2) {
    let value = 0

    if (sign === '+' && num1 !== undefined && num2 !== undefined) {
      const iNum1 = parseInt(num1)
      const iNum2 = parseInt(num2)
      value = iNum1 + iNum2
      console.log('Calculate say : ' + value)
      return String(value)
    } else if (sign === '-' && num1 !== undefined && num2 !== undefined) {
      const iNum1 = parseInt(num1)
      const iNum2 = parseInt(num2)
      value = iNum1 - iNum2
      console.log('Calculate say : ' + value)
      return String(value)
    } else {
      return 'Une erreur mec'
    }
  }

  handleReset () {
    this.setState({
      result: 0,
      currentNumber: '',
      sign: '',
      numbers: []
    })
  }

  handleNumber (number) {
    const valueReceive = number
    const oldValue = this.state.currentNumber
    const newValue = oldValue + valueReceive

    console.log(`handleNumber() valueReceive : ${valueReceive}`)
    console.log(`handleNumber() oldValue : ${oldValue}`)
    console.log(`handleNumber() newValue : ${newValue}`)

    this.setState({
      currentNumber: newValue
    })
  }

  handleSign (signReceive) {
    const value = this.state.currentNumber
    const newSign = String(signReceive)

    console.log(`handleSign() value : ${value}`)
    console.log(`handleSign() Sign income : ${newSign}`)

    if (value !== '') {
      this.state.numbers.push(value)
      console.log('handleSign() new value pushed')
    } else {
      console.log('handleSign() value undefined, so nothing pushed')
    }
    this.setState({ currentNumber: '', sign: newSign })
    console.log(`handleSign() Numbers's Array : ${this.state.numbers}`)
  }

  handleResult () {
    this.state.numbers.push(this.state.currentNumber)

    const number1 = this.state.numbers[0]
    const number2 = this.state.numbers[1]
    const sign = this.state.sign
    const resultFun = this.calculate(number1, sign, number2)

    this.state.numbers.shift()

    console.log(`handleResult() Sign use : ${sign}`)
    console.log(`handleResult() num1 use : ${number1}`)
    console.log(`handleResult() num2 use : ${number2}`)
    console.log(`handleResult() Result : ${resultFun}`)

    this.setState({
      result: resultFun,
      currentNumber: ''
    })
  }

  render () {
    const spanStyle = {
      border: '1px solid black',
      padding: '10px',
      userSelect: 'none',
      height: '20px'
    }

    const divStyle = {
      display: 'flex'
    }

    return (
      <>
        <h1>CalculAppTor</h1>
        <div style={spanStyle}>
          {this.state.currentNumber}
        </div>
        <div style={divStyle}>
          <Button name="1" action={this.handleNumber} />
          <Button name="2" action={this.handleNumber} />
          <Button name="3" action={this.handleNumber} />
        </div>
        <div style={divStyle}>
          <Button name="4" action={this.handleNumber} />
          <Button name="5" action={this.handleNumber} />
          <Button name="6" action={this.handleNumber} />
        </div>
        <div style={divStyle}>
          <Button name="7" action={this.handleNumber} />
          <Button name="8" action={this.handleNumber} />
          <Button name="9" action={this.handleNumber} />
        </div>
        <div style={divStyle}>
          <Button />
          <Button name="0" action={this.handleNumber} />
          <Button />
        </div>
        <br />
        <div style={divStyle}>
          <Button name="-" action={this.handleSign} />
          <Button name="+" action={this.handleSign} />
          <Button name="=" action={this.handleResult} />
        </div>
        <Button name="RESET" action={this.handleReset} />
        <div style={spanStyle} id="result">Resultat : {this.state.result}</div>
      </>
    )
  }
}

export default Default
