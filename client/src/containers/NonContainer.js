import React, { Component } from 'react';
import GridSizer from '../components/newNons/GridSizer'
import GridContainer from './GridContainer'
import { connect } from 'react-redux'


class NonContainer extends Component {


  render() {


    return (
      <div>
        <GridContainer />
      </div>
    );
  }
}



export default connect(null)(NonContainer)
