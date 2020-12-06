import React from 'react'
import ReactDOM from 'react-dom'

import Default from '@/layouts/Default'

ReactDOM.render(<Default />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
