import React from "react";

const Player = (props)=>{
    return (
      <>
        <div>
          {props.tshirt} | {props.children} | {props.idVal}
          <button onClick={props.delEvent}>Delete</button>
        </div>
      </>
    );
}
export default Player;