import React from "react";
// import { useState } from "react";
import CounterHOC from "./counterHOC";

const RightClickCounter = (props) => {
  const { counter, handleIncrement } = props;
  return (
    <>
      <h1>RightClick Counter: {counter}</h1>
      <button onContextMenu={handleIncrement}>RightClick Counter</button>
    </>
  );
};

const EnhanceRightClickCounter = CounterHOC(RightClickCounter, 4);
export default EnhanceRightClickCounter;
