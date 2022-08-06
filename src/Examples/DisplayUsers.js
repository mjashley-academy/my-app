import React from 'react'
/** Display array of users to browser */

    const users = [
      { name: "Raja", id: 101 },
      { name: "Ramu", id: 102 },
      { name: "Somu", id: 103 },
      { name: "Raman", id: 104 },
    ];
    const userItems = users.map((user) =>  {
        return <li key={user.id}>{user.name}</li>;
    });

export default function DisplayUsers() {

  return (
    <>
      <h2>Display Users</h2>
      <ul>{userItems}</ul>
    </>
  );
}
