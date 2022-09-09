import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterWithCustomHooks = () => {
  
    const { counter, increment, substract, reset } = useCounter()
  

    

    return (
    <>
    <h1>Counter with hook: {counter}</h1>
    <hr />

    <button onClick={increment}>+1</button>
    <button onClick={substract}>-1</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default CounterWithCustomHooks