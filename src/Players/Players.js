import React from "react";
import Player from "./Player";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        { name: "MS Dhoni", tshirt: 7, id: 101 },
        { name: "Virat", tshirt: 18, id: 102 },
        { name: "Sami", tshirt: 38, id: 103 },
        { name: "Ganguly", tshirt: 1, id: 104 },
      ],
      title: "Players List",
    };
  }

  makeNewNum = () => {
      const newState = this.state.players.map((player) => {
      const tempPlayer = player;
      
      tempPlayer.tshirt = Math.floor(Math.random() * 90);
      return tempPlayer;
    });
    this.setState(newState);
  };

  deletePlayer = (index) => {
    const players = Object.assign([], this.state.players);
    players.splice(index, 1);
    this.setState({
      players,
    });
  };
  render() {
    return (
      <div>
        <h2>hi hello</h2>
        <h2> {this.state.title}</h2>
        <button onClick={this.makeNewNum}>Make New T-Shirt Number</button>
        <br />
        <br />
        {this.state.players.map((player, index) => {
          return (
            <Player
              idVal={index + 1}
              tshirt={player.tshirt}
              delEvent={this.deletePlayer.bind(this, index)}
            >
              {player.name}
            </Player>
          );
        })}
      </div>
    );
  }
}

export default Players;
