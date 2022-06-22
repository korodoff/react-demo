import React from "react";
import { useState } from "react";

const MouseOverCounter = () => {
  const [counter, setCounter] = useState;
  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>MouseOverCounter Counter: {counter}</h1>
      <button onClick={handleCounterIncrement}>MouseOverCounter</button>
    </>
  );
};

export default MouseOverCounter;
