import React, { Component } from "react";

export default class RefcreateRef extends Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.state = { uppercase: false };
    this.toggleInputCase = this.toggleInputCase.bind(this);
  }

toggleInputCase (){
    const isUpper = this.state.uppercase;
    const value = this.inputField.current.value;
    
    this.inputField.current.value = isUpper?value.toLowerCase():value.toUpperCase();
    this.setState({ uppercase: !isUpper });
}
  render() {
    return (
      <div>
        <input type="text" ref={this.inputField} />
        <button type="button" onClick={this.toggleInputCase}>
          Toggle Case
        </button>
      </div>
    );
  }
}
