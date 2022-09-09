import React, { useRef, useLayoutEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

const Quote = ({author, quote}) => {

    const pRef = useRef()

    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect()
        setBoxSize({width, height})
     
    }, [quote])
   

  return (
    <>

    <blockquote style={{display : 'flex'}}>
      <p ref={pRef}>
        {
          quote
        }
      </p>
      <p>{author}</p>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>

     </>
  )
}

export default Quote