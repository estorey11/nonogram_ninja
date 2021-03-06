import React, { Component } from 'react';
import Grid from '../components/nons/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp, seeSolution} from '../actions/nonActions'
import SubmitSolutionAlert from '../components/SubmitSolutionAlert'

class GridContainer extends Component {

  state={
    disableSubmit: false,
    wrongCellCoords: [],
    solutionAlert: {
      show: false,
      variant: 'danger',
      text: 'This solution is incorrect. Would you like to see the answer or try again?',
      buttonShow: true,
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

  handleTryAgain=()=>{
    this.setState({...this.state, solutionAlert: {
      ...this.state.solutionAlert,
      show: false,
    }})
  }

  handleSeeSolution=()=>{
    this.props.seeSolution(this.state.wrongCellCoords, this.props.gridSolution)
    this.setState({...this.state,
      disableSubmit: true,
      solutionAlert: {
        ...this.state.solutionAlert,
        show: false,
    }})
  }

  handleSubmitClick=event=>{

    let wrongCellCoords=this.getWrongCells()

    if(wrongCellCoords.length===0){
      this.setState({...this.state, solutionAlert: {
        show: true,
        variant: 'success',
        text: 'Congratulations! You solved the nonogram!',
        buttonShow: false
      }})
    }

    else {this.setState({
      ...this.state,
      wrongCellCoords: wrongCellCoords,
      solutionAlert: {
        show: true,
        variant: 'danger',
        text: 'This solution is incorrect. Would you like to see the answer or try again?',
        buttonShow: true,
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
          disabled={this.state.disableSubmit}
          handleOnClick={this.handleSubmitClick}
          label="Submit Solution"/>
        <SubmitSolutionAlert
          variant={this.state.solutionAlert.variant}
          text={this.state.solutionAlert.text}
          show={this.state.solutionAlert.show}
          buttonShow={this.state.solutionAlert.buttonShow}
          tryAgain={this.handleTryAgain}
          seeSolution={this.handleSeeSolution}/>
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



export default connect(mapStateToProps, {rightClickCell, mouseDownOnCell, mouseOverCell, mouseUp, seeSolution})(GridContainer)
