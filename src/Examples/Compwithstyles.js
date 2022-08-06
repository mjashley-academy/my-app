import React from 'react'
const styles = {
  default: {
    backgroundColor: "#737373",
    color: "#61dafb",
    padding: "10px",
    fontSize:"30px"
  },
  disable:{
    backgroundColor:'red'
  }
};
export default function Compwithstyles(props) {
    let __styles = {...styles.default}
    if(props.disable){
         __styles = { ...__styles, ...styles.disable};
    }
  return <button style={__styles}>Compwithstyles</button>;
}
