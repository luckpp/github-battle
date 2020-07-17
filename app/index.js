import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Marius!
      </div>
    )
  }
}

ReactDOM.render(
  <App />, // React Element
  document.getElementById('app')// Where to render the element to
)