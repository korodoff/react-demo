// import { useContext } from "react";
// import { CounterContext } from "../../../App";
import ComptCContext from "./comptCcontext";
import ComptDContext from "./comptDcontext";

const ComptBContext = () => {
  // const { counter } = useContext(CounterContext);
  return (
    <>
      <h1>comonentB</h1>
      {/* <h1>comonent- B {counter}</h1> */}
      <ComptCContext />
      <ComptDContext />
    </>
  );
};

export default ComptBContext;
