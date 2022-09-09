import React from 'react'
import { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHooks = () => {

  const [counter, setCounter] = useState(10)

// SIRVE PARA MEMORIZAR FUNCIONES
 const incrementFather = useCallback(
    () => {

      // OTRA MANERA DE LLAMAR EL CALLBACK UTILIZANDO EL VALOR ACTUAL DEL STATE Y NO EL QUE ESTÁ GUARDADO EN MEMORIA
      setCounter((value) => value + 1)
    },
    [],
  )
  



  return (
    <>
    <h1>useCallback Hook: {counter}</h1>
    <hr />
    <ShowIncrement increment={incrementFather} />
    
    </>
  )
}

export default CallbackHooks