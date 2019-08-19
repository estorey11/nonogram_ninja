import React, { Component } from 'react';
import NewNonContainer from './containers/NewNonContainer'
import NonContainer from './containers/NonContainer'
import { connect } from 'react-redux'
import {fetchNonograms} from './actions/nonActions'
import {  Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import NonList from './components/nons/NonList'



import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchNonograms()
  }

  render(){
    return (
      <body style={{backgroundColor: 'lightgrey'}}>
        <div className="App">
          <Navigation />
          <Route exact path="/nonograms/new" component={ NewNonContainer } />
          <Route exact path="/nonograms" render={() => <NonList nonograms={this.props.nonograms}/> } />

        </div>
      </body>
    );
  }
}

const mapStateToProps = state => ({ nonograms: state.non.nonograms })

export default connect(mapStateToProps, {fetchNonograms})(App);
