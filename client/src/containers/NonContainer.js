import React, { Component } from 'react';
import GridSizer from '../components/newNons/GridSizer'
import GridContainer from './GridContainer'
import { connect } from 'react-redux'


class NonContainer extends Component {




  render() {
    let nonogram= this.props.nonograms[this.props.match.params.nonID-1]
    if (nonogram){
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



export default connect(null)(NonContainer)
