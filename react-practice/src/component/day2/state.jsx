import React, { useState } from "react";

const States = () =>{
    let counter2 = 0;
    const [counter, setCounter] = useState(1);

    const handleClick = () => {
        counter2++;
        
        setCounter(counter + 1);
        console.log("counter:" + counter," counter2:",counter2);
    };

    return(
        <div>
            <h1>counter:{counter} {counter2} </h1>
            <button onClick={handleClick}>increment</button>
        </div>
    );
};
export const mySg = "Hello World";
export default States;