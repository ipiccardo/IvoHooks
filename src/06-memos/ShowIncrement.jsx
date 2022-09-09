import React from 'react'

const ShowIncrement = ({increment}) => {
  return (
    <button
    onClick={() => {increment()}}
    
    >Incrementar</button>
  )
}

export default ShowIncrement