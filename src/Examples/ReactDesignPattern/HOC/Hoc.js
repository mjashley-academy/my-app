import React, { Component } from 'react'

const HocWrapper = (HocComponent) => {
  return class extends Component {
    render() {
      return <HocComponent></HocComponent>;
    }
  };
}; 

class Hoc extends Component {
  render() {
    return (
      <h2>HOC Example</h2>
    )
  }
}

export default HocWrapper(Hoc);