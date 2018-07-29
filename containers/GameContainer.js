import React, { Component } from 'react';

import Header from '../components/Header'
import PlayerContainer from './PlayerContainer'
import staterBoard from "../starterBoard"

class GameContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      opponentBoard: staterBoard,
      currentScore: 0,
      shipsRemaining: 3
    }
  }

  updateStateElement = (gameTile) => {
    let currentBoard = this.state.opponentBoard;
    let clonedBoard = currentBoard;
    let foundMatchIndex = currentBoard.findIndex((boardInstance) => (
      boardInstance.id === gameTile.id
    ));
    clonedBoard[foundMatchIndex].alreadyAttacked = true;
    this.setState({ opponentBoard:clonedBoard })
  }

  clickHandler = (gameTile, event) => {
    let currentScore = this.state.currentScore;
    let shipsRemaining = this.state.shipsRemaining;

    if (gameTile.shipPresent && gameTile.alreadyAttacked === false){
      this.updateStateElement(gameTile);
      currentScore++;
      shipsRemaining--;
      this.setState({currentScore: currentScore});
      this.setState({shipsRemaining: shipsRemaining});
    }

    else if (gameTile.alreadyAttacked && gameTile.shipPresent) {
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
    console.log("current board at render:", this.state.opponentBoard)
    return(
      <div className="game-container">
        <Header />
        <PlayerContainer id="opponent"
          opponentBoard={this.state.opponentBoard}
          currentScore={this.state.currentScore}
          shipsRemaining={this.state.shipsRemaining}
          clickHandler={this.clickHandler}
        />
      </div>
    )
  }
}

export default GameContainer
