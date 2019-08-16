import React, { Component } from 'react';
import NewNonContainer from './containers/NewNonContainer'
import NonContainer from './containers/NonContainer'
import { connect } from 'react-redux'
import {fetchNonograms} from './actions/nonActions'

import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchNonograms()
  }

  render(){
    return (
      <div className="App">
        <NewNonContainer />
        <NonContainer />
      </div>
    );
  }
}



export default connect(null, {fetchNonograms})(App);
