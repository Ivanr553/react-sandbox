import React, { Component } from 'react'

class Tile extends Component {
  render() {
    let Tile
    if(this.props.value === null) {
      if(this.props.victory) {
        Tile = <div className='Tile' key={this.props.name} >
          {this.props.value}
        </div >
      }
      else {
        Tile = <div className='Tile' key={this.props.name} onClick={ () => this.props.onClick()} >
          {this.props.value}
        </div >
      }
    } else {
      Tile = <div className='Tile' key={this.props.name} >
        {this.props.value}
      </div >
    }
    return(
      Tile
    )
  }
}

export default Tile
