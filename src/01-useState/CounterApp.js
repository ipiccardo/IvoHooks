import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
  const [{counter1, counter2, counter3}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const handleAdd = () => {
    setCounter({
      counter1: counter1 + 1,
      counter2: counter2,
      counter3: counter3
    })
  }

  return (
    <>
    <h1>
      Counter1: {counter1}
      </h1>
      <h1>
      Counter2: {counter2}
      </h1>
      <h1>
      Counter3: {counter3}
    </h1>
<hr></hr>
    <button onClick={handleAdd}>+1</button>
    </>
  )
}

export default CounterApp