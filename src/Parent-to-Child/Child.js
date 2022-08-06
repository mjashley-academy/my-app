import React from 'react';

const Child = (props) =>{
    return(
        <div>
            <button onClick={props.mjaa}>{props.title} {props.myno}</button>
        </div>
    )
}
export default Child;