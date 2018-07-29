import React, { Component } from 'react';

import Header from '../components/Header'
import PlayerContainer from './PlayerContainer'
import staterBoard from "../starterBoard"

class GameContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      opponentBoard: staterBoard
    }
  }


  clickHandler = (gameTile, event) => {
    console.log("Tile you clicked: ", gameTile)

    if (gameTile.shipPresent && gameTile.alreadyAttacked === false){
      this.state.opponentBoard[gameTile.id - 1].alreadyAttacked = true
    }

    else if (gameTile.alreadyAttacked === true) {
      alert("You've already successfully attacked this tile")
    }

    else if (gameTile.shipPresent === false){
      alert("FAILURE. NO SHIP PRESENT ON THIS TILE.")
    }

    else{
      console.log("No hit. Try again.")
    }
  }

  render(){
    // console.log(this.state.opponentBoard)
    return(
      <div className="game-container">
        <Header />
        <PlayerContainer id="opponent"
          opponentBoard={this.state.opponentBoard}
          clickHandler={this.clickHandler}
        />
      </div>
    )
  }
}

export default GameContainer


let randomShipLocation = function generateRandomCoord() {
  return Math.floor(Math.random() * Math.floor(100));
}
