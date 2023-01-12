import React, { useState } from 'react'

import './index.css'
const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount(count + 1)

  const onDecrement = () => setCount(count - 1)
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default Counter
