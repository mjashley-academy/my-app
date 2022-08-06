import React, { useState } from 'react'

export default function Sum2Num() {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [total, setTotal] = useState(0);

    function calculateTotal(){
        setTotal(num1+num2);
    }
  return (
    <>
      <h2>Adding two Numbers</h2>
      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(+e.target.value)}
      />
      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(+e.target.value)}
      />
      <button onClick={calculateTotal}>Add Two Numbers</button>
      <p>Total : {total}</p>
    </>
  );
}
