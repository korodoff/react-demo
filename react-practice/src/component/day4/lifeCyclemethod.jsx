import React from "react";

class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 1,
        }
    }

    componentDidMount(){
        console.log("component Did Mount")
    }
    
    componentDidUpdate(){
        console.log("component Did Update")
    }
    componentDidUnmount(){
        console.log("component Did Unmunt")
    }
    handleCounter = () => {
        this.setState({counter: this.state.counter +1});    
    }

    render(){
        return(
            <>
            <h1>counter: {this.state.counter}</h1>
            <button onClick={this.handleCounter}>click</button>
            </>
        )
    }

}

export default LifeCycleMethods;