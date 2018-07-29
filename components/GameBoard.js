import React, { Component } from 'react';
import UUID from 'uuid';

import GameTile from './GameTile'

class GameBoard extends Component {

  generateTiles = () => {


  }

  render(){
    // console.log("opponentBoard in gameboard component", this.props)
    return(
      <table className="game-board" id="all-tiles">
        <tbody className="table-body">
          <tr className="game-board table-body">
          {this.props.opponentBoard.map(gameTile =>
            <GameTile
              key={UUID()}
              gameTile={gameTile}
              clickHandler={this.props.clickHandler}/>
          )}
          </tr>
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

  // generateXHeaders = () => {
  //   let xHeaders = [];
  //
  //   for (let col = 1; col < 11; col++){
  //       xHeaders.push(<th key={UUID()} className="table-header">{col}</th>)
  //
  //   }
  //   return xHeaders;
  // }
  // generateGameTiles = (id1) => {
  //
  //   let gameTileRow = [];
  //   for (let id2 = 0; id2 < 10; id2++){
  //       gameTileRow.push(
  //         <th key={UUID()}
  //           className="game-tile" id={id1.toString() + id2.toString()} onClick={(event) => this.props.clickHandler(event.target.value)}>X</th>
  //       );
  //   }
  //   return gameTileRow;
  // }
  //
  // genereateAllRows = () => {
  //   let allRows = [];
  //   for (let id1 = 0; id1 < 10; id1++){
  //     allRows.push(
  //       <tr
  //         className="table-header"
  //         key={UUID()}
  //         >{this.generateGameTiles(id1)}
  //       </tr>
  //     );
  //   }
  //   return allRows;
  //
  // }


  // {this.generateXHeaders()}
  // {this.genereateAllRows()}
