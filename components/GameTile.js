import React, { Component } from 'react';

class GameTile extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    console.log("tile props", this.props)
    return(
      <div className="game-tile">
        X
      </div>
    )
  }

}

export default GameTile;
