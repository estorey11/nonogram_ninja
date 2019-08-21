import React, { Component } from 'react';
import NewNonContainer from './containers/NewNonContainer'
import NonContainer from './containers/NonContainer'
import { connect } from 'react-redux'
import {fetchNonograms} from './actions/nonActions'
import {  Route, Switch, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation'
import NonList from './components/nons/NonList'
import './App.css';
import Home from './components/Home'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchNonograms()
  }

  render(){
    return (
      <body style={{backgroundColor: 'lightgrey'}}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/success" render={ () => <h1 style={{marginTop: '150px'}}>Nonogram submitted successfully!</h1> } />

            <Route exact path="/nonograms/new" component={ NewNonContainer } />

            <Route exact path="/nonograms/:nonID" render={routerProps => <NonContainer {...routerProps} nonograms={this.props.nonograms} /> }/>

            <Route exact path='/nonograms' render={routerProps => <NonList {...routerProps} nonograms={this.props.nonograms}/>} />

            <Route path="/" render={() => <Home /> }/>

          </Switch>
        </div>
      </body>
    );
  }
}

const mapStateToProps = state => ({ nonograms: state.non.nonograms })

export default withRouter(connect(mapStateToProps, {fetchNonograms})(App));
