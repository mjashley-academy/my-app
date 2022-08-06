import React, { Component } from "react";

export default class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <div>
        <h2>Controlled Component</h2>
        <form>
          <input
            type="number"
            name="inputname"
            value={this.state.text}
            onChange={(event) => {
              this.setState({
                text: event.target.value,
              });
            }}
          ></input>
          <p>{this.state.text}</p>
        </form>
      </div>
    );
  }
}



