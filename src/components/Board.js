import React, { Component } from 'react';

import Tile from './Tile.js'
import Turn from './Turn.js'
import Victory from './Victory.js'
import Reset from './Reset.js'

class Board extends Component {

  constructor() {
    super()
    this.state = {
      tiles: Array(9).fill(null),
      turn: 'X',
      victory: false,
      victor: null
    }
  }

  handleClick(i) {
    const tiles = this.state.tiles.slice()
    if(this.state.turn === 'X') {
      tiles[i] = 'X'
      this.setState({turn: 'O'})
    } else {
      tiles[i] = 'O'
      this.setState({turn: 'X'})
    }
    this.setState({tiles: tiles})
    this.victory(tiles)
  }

  victory(tiles) {
    if(tiles[0] === tiles[1] && tiles[1] === tiles[2] && tiles[1] !== null) {
      this.setState({victory: true, victor: tiles[0]})
    }
    else if(tiles[3] === tiles[4] && tiles[4] === tiles[5] && tiles[4] !== null) {
      this.setState({victory: true, victor: tiles[3]})
    }
    else if(tiles[6] === tiles[7] && tiles[7] === tiles[8] && tiles[7] !== null) {
      this.setState({victory: true, victor: tiles[6]})
    }
    else if(tiles[0] === tiles[3] && tiles[3] === tiles[6] && tiles[3] !== null) {
      this.setState({victory: true, victor: tiles[0]})
    }
    else if(tiles[1] === tiles[4] && tiles[4] === tiles[7] && tiles[4] !== null) {
      this.setState({victory: true, victor: tiles[1]})
    }
    else if(tiles[2] === tiles[5] && tiles[5] === tiles[8] && tiles[5] !== null) {
      this.setState({victory: true, victor: tiles[2]})
    }
    else if(tiles[0] === tiles[4] && tiles[4] === tiles[8] && tiles[4] !== null) {
      this.setState({victory: true, victor: tiles[0]})
    }
    else if(tiles[2] === tiles[4] && tiles[4] === tiles[6] && tiles[4] !== null) {
      this.setState({victory: true, victor: tiles[2]})
    }
  }

  createTile(i) {
    return(<Tile name={'tile' + i} value={this.state.tiles[i]} victory={this.state.victory} onClick={ () => this.handleClick(i)}/>)
  }

  render() {
    return(
    <div className='Board' >
      <Victory victory={this.state.victory} victor={this.state.victor}/>
      <Turn value={this.state.turn} />
      <div className ='Board-Row' >
        {this.createTile(0)}
        {this.createTile(1)}
        {this.createTile(2)}
      </div >
      <div className ='Board-Row' >
        {this.createTile(3)}
        {this.createTile(4)}
        {this.createTile(5)}
      </div >
      <div className ='Board-Row' >
        {this.createTile(6)}
        {this.createTile(7)}
        {this.createTile(8)}
      </div >
      <Reset />
    </div >
    )
  }
}

export default Board
