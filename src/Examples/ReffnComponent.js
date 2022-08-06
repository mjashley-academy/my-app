import React from "react";

export default function ReffnComponent() {
    let inputRef = null;

    const setFocus = () =>{
        inputRef.focus();
    }
  return (
    <div>
      <h2>My Input</h2>
      <input
        type="text"
        ref={(input) => {
          inputRef = input;
        }}
      />
      <input type="submit" value="Submit" onClick={setFocus} />
    </div>
  );
}
