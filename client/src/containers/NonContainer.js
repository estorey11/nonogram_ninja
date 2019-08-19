import React, { Component } from 'react';
import GridContainer from './GridContainer'
import { connect } from 'react-redux'
import {setSolutionAndCluesFromSpecs} from '../actions/nonActions'


class NonContainer extends Component {




  render() {
    let nonogram= this.props.nonograms[this.props.match.params.nonID-1]
    if (nonogram){
      this.props.setSolutionAndCluesFromSpecs(nonogram.height, nonogram.width, nonogram.solution)
      return (
        <div>
          <h2>{nonogram.name || "Unnamed"}</h2>
        </div>
      )
    }
    else {
      return (
        <div>
        </div>
      )
    }
  }
}



export default connect(null, {setSolutionAndCluesFromSpecs})(NonContainer)
