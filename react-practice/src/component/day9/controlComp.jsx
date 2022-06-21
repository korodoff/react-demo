import React from "react";
import { useState } from "react";

const ControlComp = () => {
  const [name, setName] = useState("");

  const getMessage = () => {
    if (name.length < 8) {
      return <h3>password should be greater than 8</h3>;
    } else if (name.length > 12) {
      return <h3>password should be less than 12</h3>;
    } else {
      return <h3>password is good</h3>;
    }
  };
  return (
    <>
      <div>
        <label htmlFor="uncontrolled">uncontrolled component</label>
        <input type="text" id="uncontrolled" />
      </div>
      <div>
        <label htmlFor="controlled">controlled component</label>
        <input
          id="controlled"
          value={name}
          onChange={(e) => setName(e.target.name)}
        />
      </div>
      <div>{getMessage()}</div>
    </>
  );
};

export default ControlComp;
