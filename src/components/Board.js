import React, { Component } from 'react';

import Tile from './Tile.js'

class Board extends Component {

  createTile(i) {
    let TileArray = [];
    for(let j = 0; j < i; j++) {
      TileArray.push(<Tile value={j} />)
    }
    return TileArray
  }

  render() {
    return(
    <div className='Board' >
      <div className ='Board-Row' >
        {this.createTile(3)}
      </div >
      <div className ='Board-Row' >
        {this.createTile(3)}
      </div >
      <div className ='Board-Row' >
        {this.createTile(3)}
      </div >
    </div >
    )
  }
}

export default Board
