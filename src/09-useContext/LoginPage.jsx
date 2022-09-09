import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {

  //CONSUMIENTO EL CONTEXTO
  const {user} = useContext(UserContext)

  // LLAMO AL CONTEXTO QUE ME INTERESA DENTRO DEL HOOK useContext


  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre >
      {user && JSON.stringify(user)}
      </pre>


    </>
  );
};

export default LoginPage;
