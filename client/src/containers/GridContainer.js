import React, { Component } from 'react';
import Grid from '../components/nons/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp} from '../actions/nonActions'
import SubmitSolutionAlert from '../components/SubmitSolutionAlert'

class GridContainer extends Component {

  state={wrongCellCoords: []}

  handleMouseEvents=event=>{
    if (event.type==='mousedown'){this.props.mouseDownOnCell(event.target.id)}
    else if (event.type==='mouseover'){this.props.mouseOverCell(event.target.id)}
    else if (event.type==='mouseup'){this.props.mouseUp()}
    else if (event.type==='contextmenu') {
      event.preventDefault()
      this.props.rightClickCell(event.target.id)
    }
  }


  handleSubmitClick=event=>{
    this.setState({...this.state, wrongCellCoords: this.getWrongCells()})
  }

  getWrongCells(){
    let wrongCellCoords=[]

    this.props.gridSolution.forEach((rowSolution, y)=>{
      rowSolution.forEach((cellSolution, x)=>{
        if(cellSolution===1 && this.props.grid[y][x]!=1){wrongCellCoords.push([x, y])}
        if(cellSolution===0 && this.props.grid[y][x]===1){wrongCellCoords.push([x, y])}
      }
      )}
    )

    return wrongCellCoords
  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick} label="Submit Solution"/>
        <SubmitSolutionAlert variant='success' show={false}/>
        <Grid grid={this.props.grid} rowClues={this.props.rowClues} colClues={this.props.colClues} handleMouseEvents={this.handleMouseEvents}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.non.grid, rowClues: state.non.rowClues, colClues: state.non.colClues, gridSolution: state.non.gridSolution })



export default connect(mapStateToProps, {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp})(GridContainer)
