import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const AboutPage = () => {


  const {user} = useContext(UserContext)  

  return (
    <>
      <h1>AboutPage</h1>
      <hr />
      <pre>
        {user && JSON.stringify(user)}
      </pre>
    </>
  );
};

export default AboutPage;
