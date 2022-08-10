import React, { Component } from 'react'
import loadingSpinning from  "./loadingSpinning.gif"
export default class Loadinglogic  extends Component {
  render() {
    return (
      <div>
        <img src={loadingSpinning} alt="loading" />
      </div>
    )
  }
}
