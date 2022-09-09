import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react'


const UserProvider = ({children}) => {

    const [user, setUser] = useState()

    // const user = {
    //     id: 123,
    //     name: 'Iván Piccardo',
    //     age: 31
    // }

  


  return (
    <>
         <UserContext.Provider value={{setUser, user}}>
            {children}
         </UserContext.Provider>
    </>
  )
}

export default UserProvider