import React from "react";
import { useContext } from "react";
import { FirstName, LastName, MiddleName } from "../../../App";
const ComptDContext = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  const mname = useContext(MiddleName);
  //   const { counter, handleIncrement } = useContext();
  return (
    <>
      <h1>component-D</h1>
      <h2>use context: {`${fname} ${mname} ${lname}`}</h2>
      {/* <h3>counter: {counter}</h3> */}
      {/* <button onClick={handleIncrement}></button> */}
    </>
  );
};

export default ComptDContext;
