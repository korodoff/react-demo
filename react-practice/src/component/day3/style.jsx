import "./day3style.css"

const StyleComponent = () =>{
    const styleObj = {backgroundColor: "red", color: "blue"}
    return(
        <>
        <h1 style = {styleObj}>stule component</h1>

        <h2> component 2</h2>
        
        <h3 style={{backgroundColor: "pink", color: "grey"}}>yes</h3>
        </>

        
    )

}

export default StyleComponent;