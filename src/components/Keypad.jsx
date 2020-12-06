import React from 'react'
import PropTypes from 'prop-types'

import Pad from '@/components/Pad'

class Keypad extends React.Component {
  renderRow (padRow) {
    const row = []
    for (const [key, pad] of Object.entries(padRow)) {
      row.push(<Pad key={key} className={this.props.padClass + ' ' + pad.className} slot={pad.slot} onClick={pad.onClick} disabled={pad.disabled} />)
    }

    return row
  }

  render () {
    const rows = []
    for (const [key, padRow] of Object.entries(this.props.keypad)) {
      rows.push(
        <div key={key} className={this.props.rowClass}>{this.renderRow(padRow)}</div>
      )
    }

    return (
      <>
        <div className={this.props.className}>
          {rows}
        </div>
      </>
    )
  }
}

Keypad.propTypes = {
  keypad: PropTypes.array.isRequired,

  className: PropTypes.string,
  padClass: PropTypes.string,
  rowClass: PropTypes.string
}

export default Keypad
