import { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [counter, setCounter] = useState(0);
  const [decrementCounter, setDecrementCounter] = useState(100);

  useEffect(() => {
    // document.addEventListener("keydown", handlekeydown);
    console.log("increment counter variable is updater");
    return () => {
      //   document.removeEventListener("keydown", handlekeydown);
    };
  }, [counter]);

  useEffect(() => {
    console.log("decrement counter variable is updater");
    return () => console.log("decrement useEffect- component unMounting");
  }, [decrementCounter]);

  useEffect(() => {
    return () => console.log("component is unmounted");
  });
  useEffect(() => {
    return () => console.log("component is unmount");
  });
  //   const handlekeydown = (e) => {
  //     console.log("key Pressed of code", e.keyCode);
  //   };

  return (
    <>
      <h1>counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <h1>counter:{decrementCounter}</h1>
      <button onClick={() => setDecrementCounter(decrementCounter + 1)}>
        decrement
      </button>
    </>
  );
};

export default UseEffectComponent;
