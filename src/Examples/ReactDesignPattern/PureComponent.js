import React, { PureComponent } from "react";

const Temp = (props) => {
  console.log("Temp method section");
  return <div>{props.val}</div>;
};

export default class PureComponentExample extends PureComponent {
  state = {
    val: 1,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 };
      });
    }, 2000);
  }
  /* shouldComponentUpdate(nextProps, nextState) {
    const flag = this.state.val === nextState.val;
    return !flag;
  } */
  render() {
    console.log("render method section");
    return (
      <div>
        <Temp val={this.state.val} />
      </div>
    );
  }
}
