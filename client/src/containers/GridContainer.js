import React, { Component } from 'react';
import Grid from '../components/nons/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp} from '../actions/nonActions'


class GridContainer extends Component {

  handleMouseEvents=event=>{
    console.log(event.altKey)
    if (event.type==='mousedown'){this.props.mouseDownOnCell(event.target.id)}
    else if (event.type==='mouseover'){this.props.mouseOverCell(event.target.id)}
    else if (event.type==='mouseup'){this.props.mouseUp()}

  }

  handleCellRightClick=event=>{
    event.preventDefault()
    this.props.rightClickCell(event.target.id)
  }

  handleSubmitClick=event=>{

  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick}/>
        <Grid grid={this.props.grid} rowClues={this.props.rowClues} colClues={this.props.colClues} handleOnRightClick={this.handleCellRightClick} handleOnMouseDown={this.handleMouseDownOnCell} handleMouseEvents={this.handleMouseEvents}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.non.grid, rowClues: state.non.rowClues, colClues: state.non.colClues, gridSolution: state.non.gridSolution })



export default connect(mapStateToProps, {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp})(GridContainer)
