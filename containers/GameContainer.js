import React, { Component } from 'react';

import Header from '../components/Header'
import PlayerContainer from './PlayerContainer'


class GameContainer extends Component {


  render(){
    return(
      <div className="game-container">
        GameContainer here
        <Header />
        <PlayerContainer />
        <PlayerContainer />
      </div>
    )
  }
}

export default GameContainer
