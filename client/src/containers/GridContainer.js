import React, { Component } from 'react';
import Grid from '../components/nons/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'

class GridContainer extends Component {

  handleCellClick=event=>{
  //  this.props.switchCell(event.target.id)
  }

  handleSubmitClick=event=>{

  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick}/>
        <Grid grid={this.props.grid} rowClues={this.props.rowClues} colClues={this.props.colClues} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.non.grid, rowClues: state.non.rowClues, colClues: state.non.colClues, gridSolution: state.non.gridSolution })

const mapDispatchToProps = dispatch => ({
  switchCell: (coords) => dispatch({type: 'SWITCH_CELL', coords}),
})


export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)
