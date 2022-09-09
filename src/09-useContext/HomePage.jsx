import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const HomePage = () => {


  const {setUser, user} = useContext( UserContext )

  const onHandleClick = (e) => {
    setUser({
      name: 'Iván',
      age: 31,
      mail: 'ivan_piccardo@hotmail.com'
    })

    return user
  }

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <pre>
        {JSON.stringify(user && user)}
      </pre>

      <button onClick={onHandleClick}>
        Establecer Usuario
      </button>
    </>
  );
};

export default HomePage;
