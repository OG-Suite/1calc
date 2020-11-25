import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  render () {
    const handleSayName = (event) => {
      this.props.action(event.target.name)
    }

    const divStyle = {
      flex: '1',
      width: '100px',
      minHeight: '30px'
    }

    return (
      <div>
        <button style={divStyle} onClick={handleSayName} name={this.props.name}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  action: PropTypes.func,
  name: PropTypes.string
}

export default Button
