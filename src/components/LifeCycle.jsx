import React, { Component } from "react";
import Life from "./Life";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "tenny",
      age: 6238,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { age: props.age };
  }

  componentDidMount() {
    console.log("compounent mounted");
  }
  componentDidUpdate(){
    console.log("comp updated")
  }
  shouldComponentUpdate(nextprops,nextstate){
    if(nextstate.name!==this.state.name){
        return true
    }
    else{
        return false
    }
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
  document.getElementById("pre").innerText=prevState.name
  }
  render() {
    return (
      <div>
        {this.state.name}-{this.state.age}
        <button
          onClick={() => {
            setTimeout(() => {
              this.setState({
                name: "surya",
              });
            }, 1000);
          }}
        >
          change
        </button>
        <Life />
        <h1 id="pre">prev value</h1>
      </div>
    );
  }
}

export default LifeCycle;
