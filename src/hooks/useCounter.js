import { useState } from "react"

export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }


    const substract = () => {
        counter > 0 ? 
        setCounter(counter - 1) :
        setCounter(0)
    }
  
    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        setCounter,
        initialValue,
        increment,
        substract,
        reset
    }
}