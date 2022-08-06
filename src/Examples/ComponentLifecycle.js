import React, { Component } from "react";

export default class ComponentLifecycle extends Component {
  constructor() {
    super();
    this.state = { hello: "world", data: '' };
  }

  componentWillMount() {
    console.log("Component will mount section!");
  }

  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    fetch(apiUrl).then((response) => response.json()).then(data=>{
        console.log("This is your API data", data);
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }
  componentWillUpdate() {
    console.log("component will update");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  changeState() {
    this.setState({ hello: "Michael" });
  }
  render() {
    return (
      <div>
        <h2>Hello {this.state.hello}</h2>
        <a onClick={this.changeState.bind(this)}>Press Here...</a>
      </div>
    );
  }
}


