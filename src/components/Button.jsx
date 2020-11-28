import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
      <button className={props.className} onClick={props.function}>{props.isDisabled ? '' : props.value}</button>
  )
}

Button.propTypes = {
  function: PropTypes.func,
  isDisabled: PropTypes.bool,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
