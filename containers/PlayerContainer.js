import React, { Component } from 'react';

import GameBoard from '../components/GameBoard'
import GameDetails from '../components/GameDetails'

class PlayerContainer extends Component {

  render(){
    return(
    <div className="player-container">
      <GameBoard
        clickHandler={this.props.clickHandler}
        opponentBoard={this.props.opponentBoard}
      />
      <GameDetails />
    </div>
  )}
}

export default PlayerContainer;
