import React, { Component } from "react";

export default class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }
  render() {
    return (
      <div>
        <h2>UncontrolledComponent</h2>
        <form onSubmit={(event)=>{
            event.preventDefault();
            console.log("input val>>>", this.inputField.current.value)
        }}>
            <input type= "date"
            name = "data"
            ref={this.inputField} />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
