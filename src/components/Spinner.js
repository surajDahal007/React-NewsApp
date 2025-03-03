import React, { Component } from 'react'
// import loading from './public/loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src='/loading.gif' alt="Loading..." />
      </div>
    )
  }
}

export default Spinner
