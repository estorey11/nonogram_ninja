import React, { Component } from 'react';
import Grid from '../components/nons/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp} from '../actions/nonActions'
import SubmitSolutionAlert from '../components/SubmitSolutionAlert'

class GridContainer extends Component {

  state={
    wrongCellCoords: [],
    solutionAlert: {
      show: false,
      variant: 'danger',
      text: 'This solution is incorrect. Would you like to see the answer or try again?'
    }
  }

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

    let wrongCellCoords=this.getWrongCells()

    if(wrongCellCoords.length===0){
      this.setState({...this.state, solutionAlert: {
        show: true,
        variant: 'success',
        text: 'Congratulations! You solved the nonogram!'
      }})
    }

    else {this.setState({
      ...this.state,
      wrongCellCoords: wrongCellCoords,
      solutionAlert: {
        show: true,
        variant: 'danger',
        text: 'This solution is incorrect. Would you like to see the answer or try again?'
      }
      })
    }
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
        <SubmitButton
          handleOnClick={this.handleSubmitClick}
          label="Submit Solution"/>
        <SubmitSolutionAlert
          variant={this.state.solutionAlert.variant}
          text={this.state.solutionAlert.text}
          show={this.state.solutionAlert.show}/>
        <Grid
          grid={this.props.grid}
          rowClues={this.props.rowClues}
          colClues={this.props.colClues}
          handleMouseEvents={this.handleMouseEvents}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.non.grid, rowClues: state.non.rowClues, colClues: state.non.colClues, gridSolution: state.non.gridSolution })



export default connect(mapStateToProps, {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp})(GridContainer)
