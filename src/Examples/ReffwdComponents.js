import React from "react";

const MyInput = (props) =>{
    return <input type="text" ref={props.inputRef} />;
}

export default function ReffwdComponents() {
  let inputRef = null;

  const setFocus = () => {
    inputRef.focus();
  };
  return (
    <div>
      <h2>My Input</h2>
      <MyInput inputRef = {(input) => {inputRef = input;}}/>
      <input type="submit" value="Submit" onClick={setFocus} />
    </div>
  );
}
