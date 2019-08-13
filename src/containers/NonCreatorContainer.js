import React, { Component } from 'react';
import GridSizer from '../components/nonCreators/GridSizer'
import GridCreator from '../components/nonCreators/GridCreator'
import { connect } from 'react-redux'

class NonCreatorContainer extends Component {
  render() {
    return (
      <div>
        <GridSizer />
        <GridCreator />
      </div>
    );
  }
}

export default NonCreatorContainer
