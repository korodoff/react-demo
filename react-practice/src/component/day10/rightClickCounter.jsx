import React from "react";
import { useState } from "react";

const RightClickCounter = () => {
  const [counter, setCounter] = useState;
  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>RightClick Counter: {counter}</h1>
      <button onClick={handleCounterIncrement}>RightClick Counter</button>
    </>
  );
};

export default RightClickCounter;
