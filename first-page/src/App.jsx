import React from 'react'
import ReactDOM from 'react-dom'

import Header from 'container/Header'
import Counter from './Counter'

import './index.css'

const App = () => (
  <div className="container">
    <Header>Counter MicroFronend</Header>
    <Counter />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
