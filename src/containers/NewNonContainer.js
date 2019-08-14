import React, { Component } from 'react';
import GridSizer from '../components/newNons/GridSizer'
import NewGridContainer from './NewGridContainer'
import { connect } from 'react-redux'

class NewNonContainer extends Component {

  state={vert: 5, hor: 5}

  handleSizeChange=event=>{
    this.setState({[event.target.name]: event.target.value})
  }

  componentDidUpdate(){
    this.props.resizeGrid(this.state.vert, this.state.hor)
  }


  render() {


    return (
      <div>
        <GridSizer handleOnChange={this.handleSizeChange} vert={this.state.vert} hor={this.state.hor}/>
        <NewGridContainer vert={this.state.vert} hor={this.state.hor}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resizeGrid: (vert, hor) => dispatch({type: 'RESIZE_GRID', vert, hor}),
})


export default connect(null, mapDispatchToProps)(NewNonContainer)
