import React, { Component } from 'react';
import NewNonContainer from './containers/NewNonContainer'
import NonContainer from './containers/NonContainer'
import { connect } from 'react-redux'
import {fetchNonograms} from './actions/nonActions'
import {  Route } from 'react-router-dom';


import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchNonograms()
  }

  render(){
    return (

        <div className="App">
          
          <Route path="/nonograms/new" component={ NewNonContainer } />
          <NonContainer />
        </div>

    );
  }
}



export default connect(null, {fetchNonograms})(App);
