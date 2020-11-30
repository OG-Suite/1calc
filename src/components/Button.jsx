import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  // const value = props.isDisabled ? '' : props.icon ? props.icon : props.value
  return (
      <button className={props.className} onClick={props.function}>{props.isDisabled ? '' : props.icon}</button>
  )
}

Button.propTypes = {
  function: PropTypes.func,
  isDisabled: PropTypes.bool,
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
