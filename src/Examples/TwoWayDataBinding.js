import React, { Component } from 'react'

export default class TwoWayDataBinding extends Component {
    constructor(){
        super();
        this.state = {
            name : ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange = {this.handleInputChange} />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
