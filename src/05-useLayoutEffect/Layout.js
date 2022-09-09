import React from 'react'
import useFetch from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import Loading from '../03-examples/Loading';
import Quote from '../03-examples/Quote'

const Layout = () => {

    const {counter, increment} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

   const {quote, author} = !!data && data[0]
   
// DobleNegación !!data && data[0] es lo mismo que decir data ? data[0] : ''
 

  return (
    <>
    <h1>BreakingBad Quotes </h1>
    <hr />
    {
      isLoading ? 
      <Loading/> :
      <Quote author={author} quote={quote} />
    }

    <button onClick={increment}>Next Quote</button>
    </>
  )
}

export default Layout