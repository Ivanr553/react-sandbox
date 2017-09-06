import React, { Component } from 'react'

class Tile extends Component {
  render() {
    return(
      <div className='Tile' >
        {this.props.value}
      </div >
    )
  }
}

export default Tile
