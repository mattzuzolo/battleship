import React, { Component } from 'react';

class GameDetails extends Component {

  render(){
    return(
      <div className="game-details">
        <h1>Player Details:</h1>
        <h3>Current score: 15</h3>
        <h3>Remaining ships: 5</h3>
      </div>
    )
  }


}

export default GameDetails;
