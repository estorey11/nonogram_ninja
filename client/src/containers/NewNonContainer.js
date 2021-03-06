import React, { Component } from 'react';
import GridSizer from '../components/newNons/GridSizer'
import NewGridContainer from './NewGridContainer'
import { connect } from 'react-redux'


class NewNonContainer extends Component {

  state={yLength: 5, xLength: 5}

  handleSizeChange=event=>{
    let value=event.target.value
    if (value>30) {value=30}
    if (value<1) {value=1}
    this.setState({[event.target.name]: value})
  }

  componentDidUpdate(){
    this.props.resizeGrid(this.state.yLength, this.state.xLength)
  }




  render() {


    return (
      <div>
        <GridSizer handleOnChange={this.handleSizeChange} yLength={this.state.yLength} xLength={this.state.xLength}/>

        <NewGridContainer grid={this.props.grid} yLength={this.state.yLength} xLength={this.state.xLength}/>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  resizeGrid: (yLength, xLength) => dispatch({type: 'RESIZE_GRID', yLength, xLength}),
})


export default connect(null, mapDispatchToProps)(NewNonContainer)
