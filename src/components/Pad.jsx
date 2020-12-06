import React from 'react'
import PropTypes from 'prop-types'

class Pad extends React.Component {
  render () {
    if (this.disabled) {
      return (
        <button className={this.props.className}></button>
      )
    } else {
      return (
        <button className={this.props.className} onClick={this.props.onClick}>
          {this.props.slot}
        </button>
      )
    }
  }
}

Pad.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,

  slot: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
}

export default Pad
