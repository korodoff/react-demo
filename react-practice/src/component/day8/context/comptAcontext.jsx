import React from "react";
import ComptBContext from "./comptBcontext";
const ComptAContext = () => {
  return (
    <>
      <h1>comonentA</h1>
      <ComptBContext />
      {/* we dont use this because we dont went to re render the whole other component we wat to re re render only c so we have to use context */}
    </>
  );
};

export default ComptAContext;
