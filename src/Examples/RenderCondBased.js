import React from 'react'
//conditional based rendering
export default function RenderCondBased() {
    const child = 5;
    const message = 'hello';
  return (
    <div>
        {
            child > 3 && message != '' && <div>Hello!</div>
        }
    </div>
  )
}
