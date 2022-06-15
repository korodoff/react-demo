import { useEffect, useState } from "react";
const EventHandelimg = () =>{
    const [inputVal, setInputVal] = useState("")

    useEffect(() =>{
        document.addEventListener('keydown', handleKeyDown);
    },[])
    const handleKeyDown = (e) => console.log("=== on Key DOwn ===",e.keyCode )
    const handleClick = ()=>{
        console.log("clicked")
    };

    const handleChange = (e) =>{
        setInputVal(e.target.value)
        console.log(e.target.value)
    };
    return(
        <>
        <button onClick={handleClick}>click ME</button>
        <input value = {inputVal} onChange={handleChange} />
        <h1 
        onMouseOver={() =>
            console.log("======== Mouse Hovered ==========")

        }>
            welcome to prepbyte
        </h1>
        <h1>this is on keydown event</h1>
        </>
    );



};
export default EventHandelimg;