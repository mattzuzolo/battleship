import React, { Component } from 'react';

class GameTile extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    // console.log("tile props:", this.props.gameTile)
    return(
        <th className="game-tile" onClick={(event) => this.props.clickHandler(this.props.gameTile)}>
          x
        </th>
    )
  }

}

export default GameTile;
