import React from "react";
// import { useState } from "react";
import CounterHOC from "./counterHOC";

const MouseOverCounter = (props) => {
  const { counter, handleIncrement } = props;
  return (
    <>
      <h1 onMouseOver={handleIncrement}>MouseOverCounter Counter: {counter}</h1>
    </>
  );
};

const EnhanceOverCounter = CounterHOC(MouseOverCounter, 3);
export default EnhanceOverCounter;
