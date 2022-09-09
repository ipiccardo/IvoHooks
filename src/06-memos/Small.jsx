import React from 'react'
import { memo } from 'react'

const Small = memo(({value}) => {

    console.log('Me volví a generar')


  return (
    <small>
        {value}</small>
  )
})

export default Small