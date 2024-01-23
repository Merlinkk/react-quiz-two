import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {    
    return (
      <>
      <div className='container'>
        <h1 className='quizHeading'>Quiz App</h1>
        <button onClick={this.props.toggle} className='playButton'>Play</button>
      </div>
      </>
    )
  }
}
