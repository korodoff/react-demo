import React, {Component} from "react";
class StateClass extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    };


    render(){
        return(
            <div>
                <h1> class counter: {this.state.counter}</h1>
                <button onClick={this.handleClick}>increment</button>
            </div>
        );
    }
};



export default StateClass;

