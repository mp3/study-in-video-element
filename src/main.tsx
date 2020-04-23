import React from 'react'
import ReactDOM from 'react-dom'

const Container = () => {
  return (
    <div>{'Hello, world'}</div>
  )
}

ReactDOM.render(<Container />, document.getElementById('container'))
