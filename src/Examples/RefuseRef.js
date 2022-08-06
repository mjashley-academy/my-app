import React, { useRef, useState } from "react";

export default function RefuseRef() {
  const inputField = useRef(null);
  const [uppercase, setUppercase] = useState(false);

  const toggleInputCase = () => {
    const value = inputField.current.value;
    inputField.current.value = uppercase
      ? value.toLowerCase()
      : value.toUpperCase();
    setUppercase((previousValue) => !previousValue);
  };

  return (
    <div>
      <input type="text" ref={inputField} />
      <button type="button" onClick={toggleInputCase}>
        Toggle Case
      </button>
    </div>
  );
}
