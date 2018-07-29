import React, { Component } from 'react';

class GameDetails extends Component {

  render(){
    return(
      <div className="game-details">
        <h1>Game Details:</h1>
        <h3>Current score: {this.props.currentScore}</h3>
        <h3>Remaining ships: {this.props.shipsRemaining}</h3>
      </div>
    )
  }


}

export default GameDetails;
