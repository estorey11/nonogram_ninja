import React, { Component } from 'react';
import Grid from '../components/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {postNonogram, switchCell} from '../actions/newNonActions'


class NewGridContainer extends Component {

  handleCellClick=event=>{
    this.props.switchCell(event.target.id)
  }

  handleSubmitClick=event=>{
    this.props.postNonogram(this.gridConverter())
  }

  gridConverter=()=>{
    const height=this.props.grid.length
    const width=this.props.grid[0].length
    const solution=this.solutionConverter();

    return {nonogram: {height: height, width: width, solution: solution} }
  }

  solutionConverter=()=>{
    const solutionRows=this.props.grid.map(row=>row.join(''))
    return solutionRows.join('')
  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick}/>
        <Grid grid={this.props.grid} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.newNon.grid })




export default connect(mapStateToProps, {postNonogram, switchCell})(NewGridContainer)
