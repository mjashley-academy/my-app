import React, { Component } from "react";

export default class RefclassComponent extends Component {
  onKeyUp = (target, e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };

  finalMsg = () => {
    alert(`Hello ${this.firstName.value}  ${this.lastName.value} submitted!`);
  };

  resetBox = () => {
    this.firstName.value = '';
    this.lastName.value = '';
    this.age.value = '';
  }
  render() {
    return (
      <>
        <div className="main-container">
          <div>
            <span>First Name: </span>
            <input
              type="text"
              ref={(input) => {
                this.firstName = input;
              }}
              onKeyUp={(event) => {
                this.onKeyUp("firstName", event);
              }}
            ></input>
          </div>
          <div>
            <span>Last Name: </span>
            <input
              type="text"
              ref={(input) => {
                this.lastName = input;
              }}
              onKeyUp={this.onKeyUp.bind(this, "lastName")}
            ></input>
          </div>
          <div>
            <span>Age: </span>
            <input
              type="text"
              ref={(input) => {
                this.age = input;
              }}
              onKeyUp={this.onKeyUp.bind(this, "age")}
            ></input>
          </div>
          <div>
            <input
              type="submit"
              value="submit"
              ref={(input) => {
                this.submit = input;
              }}
              onClick={this.finalMsg}
            ></input>
            <input type="reset" value="Clear" onClick={this.resetBox} />
          </div>
        </div>
      </>
    );
  }
}
