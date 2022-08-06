import React, { Component } from 'react'

export default class DisplayUsersCls extends Component {
    constructor(){
        super();
        this.state = {
            users:[
          { name: "Rajaa", id: 101 },
          { name: "Ramu", id: 102 },
          { name: "Somu", id: 103 },
          { name: "Raman", id: 104 },
        ]
    };
    
    }

    usersList = ()=>{
        this.state.users.map(user =>{
        return <li key={user.id}>{user.name}</li>
    });
    
    }

  render() {
console.log(this.usersList);
    return (
      <>
        <h2>Display Users (class component)</h2>
        <ul>
          {this.state.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
