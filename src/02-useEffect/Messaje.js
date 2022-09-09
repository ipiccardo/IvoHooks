import React from "react";
import { useEffect } from "react";

const Messaje = () => {

    useEffect(() => {
      console.log('Message Mounted')
    
      return () => {
        console.log('Message UnMounted')
      }
    }, [])
    



  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};

export default Messaje;
