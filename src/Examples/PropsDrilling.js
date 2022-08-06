import React from 'react'

export default function PropsDrilling() {
  return (
    <ParentClass color='blue' />
  )
}

const ParentClass = (props) => {
   return <ChildClass color={props.color} />
}


const ChildClass = (props) => {
   return <GrandClass color = {props.color} />
}

const GrandClass = (props) => {
    return <p>Color: {props.color}</p>
}