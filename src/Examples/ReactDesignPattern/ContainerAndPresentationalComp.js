import React, { Component } from 'react'
import axios from 'axios';

// Presentational Component
const Users = (props) =>{
    return (
      <ul>
        {props.userInfo.map((usr) => {
          return <li>{usr.title}</li>;
        })}
      </ul>
    );
}


//Container component
export default class ContainerAndPresentationalComp extends Component {
    constructor(){
        super();
        this.state ={
            userInfo:[]
        }
    }
    componentDidMount(){
        let apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=5";
        axios.get(apiUrl).then((resp)=>{
            return this.setState({userInfo:resp.data});
        });
    }
  render() {
    return (
      <>
        <h2>Container And Presentational Components</h2>
        <Users userInfo = {this.state.userInfo}></Users>
      </>
    );
  }
}
