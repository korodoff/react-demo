import React from "react";
// import { useState } from "react";
import CounterHOC from "./counterHOC";

const ClickCounter = (props) => {
  const { counter, handleIncrement } = props;
  return (
    <>
      <h1>Click Counter: {counter}</h1>
      <button onClick={handleIncrement}>Click Counter</button>
    </>
  );
};
const EnhanceClickCounter = CounterHOC(ClickCounter, 2);

export default EnhanceClickCounter;
