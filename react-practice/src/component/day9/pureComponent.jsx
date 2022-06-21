import React, { Component, PureComponent } from "react";

class ComponentPure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "krut",
      arr: [10],
    };
  }
  handleUpdate = () => {
    const number = Math.round(Math.random() * 10);
    // this.setState({ name: this.state.name });
    const { arr } = this.state;
    const arrCopy = [...arr];
    arrCopy.push(number);
    this.setState({ arr: arrCopy });
  };
  render() {
    console.log("component updated");
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        {this.state.arr.map((val) => (
          <h3>{val}</h3>
        ))}
        <button onClick={this.handleUpdate}>Click</button>
      </div>
    );
  }
}

export default ComponentPure;
