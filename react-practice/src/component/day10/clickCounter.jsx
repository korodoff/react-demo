import React from "react";
import { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState;
  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleCounterIncrement}>Click Counter</button>
    </>
  );
};

export default ClickCounter;
