import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useState } from "react";
import { useMemo } from "react";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("ahi vamos...");
  }

  return `${iterationNumber} Iteraciones realizadas`;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(400);
  const [show, setShow] = useState(true);

  const momorizedValue = useMemo(() => heavyStuff(counter), [counter])


  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{momorizedValue}</h4>
      <button onClick={increment}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
