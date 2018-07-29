import React, { Component } from 'react';

import Header from '../components/Header'
import PlayerContainer from './PlayerContainer'


class GameContainer extends Component {


  render(){
    return(
      <div className="game-container">
        <Header />
        <PlayerContainer id="opponent"/>
        <PlayerContainer id="user"/>
      </div>
    )
  }
}

export default GameContainer
