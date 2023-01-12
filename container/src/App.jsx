import React from 'react'
import ReactDOM from 'react-dom'

import Counter from 'first_page/Counter'

import './index.css'
import Header from './Header'

const App = () => {
  return (
    <div className="container">
      <Header>Counter app</Header>
      <Counter />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
