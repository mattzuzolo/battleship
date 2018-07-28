import React, { Component } from 'react';

import GameBoard from '../components/GameBoard'
import GameDetails from '../components/GameDetails'

class PlayerContainer extends Component {

  render(){
    return(
    <div className="player-container">
      player container here
      <GameBoard />
      <GameDetails />
    </div>
  )}
}

export default PlayerContainer;
