import React from "react";
import stylesWrapper from "./stylesWrapper";

const ButtonOne = (props) => {
  console.log(props);
  return <button style={props.styles}>Button One </button>;
};

export default stylesWrapper(ButtonOne);
