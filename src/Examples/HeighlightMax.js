import React from 'react'
// heighlight the max value on given array.
export default function HeighlightMax() {
    const numbers = [20,60,30,50,10,90,70];

    // Get the largest number
    const max_num = Math.max(...numbers);
    const max_indx = numbers.indexOf(max_num);

  return (
    <>
      <div>Heighlight Max </div>
      <ul>{numbers.map((item,index) => {
        const heighlights = max_indx === index ? "heighlights" : ''
        return (
          <li key={index} className={heighlights}>
            {item}
          </li>
        );
      })}</ul>
    </>
  );
}
