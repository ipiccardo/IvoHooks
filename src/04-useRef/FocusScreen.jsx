import React from "react";
import { useRef } from "react";

const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => { 
        console.log(inputRef)
        inputRef.current.select()
    }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
      ref={inputRef}
      type='text'
      placeholder="Ingrese su nombre">
      </input>

      <button onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};

export default FocusScreen;
