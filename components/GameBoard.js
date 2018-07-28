import React, { Component } from 'react';
import UUID from 'uuid';

import GameTile from './GameTile'

class GameBoard extends Component {


  generateXHeaders = () => {
    let xHeaders = [];

    for (let col = 1; col < 11; col++){
        xHeaders.push(<th className="table-header" colId={col}>{col}</th>)

    }
    return xHeaders;
  }
  generateGameTiles = () => {

    let gameTileRow = [];
    for (let row = 0; row < 10; row++){
        gameTileRow.push(
          <th className="game-tile"> </th>
        );
    }
    return gameTileRow;
  }

  genereateAllRows = () => {
    let allRows = [];
    for (let row = 0; row < 10; row++){
      allRows.push(
        <tr>
          {this.generateGameTiles()}
        </tr>
      );
    }
    return allRows;

  }

  render(){
    return(
      <table className="game-board" id="all-tiles">
        <tbody>
          <tr>
            {this.generateXHeaders()}
          </tr>
          {this.genereateAllRows()}
        </tbody>
      </table>
    )
  }
}

export default GameBoard


// generateYHeaders = () => {
//
//   let yHeaders = [];
//   for (let row = 0; row < 10; row++){
//     yHeaders.push(<th className="table-header">row</th>)
//   }
// }
