import React, { Component } from 'react'

class Victory extends Component {

  render() {
    if(this.props.victory) {
      return(
        <div className='Victory' >
          Player {this.props.victor} has won!
        </div>
      )
    } else {
      return(
        <div className='Victory' >
        </div>
      )
    }
  }
}

export default Victory
