import React, { Component } from 'react';
import NewGrid from '../components/newNons/NewGrid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {postNonogram, mouseUp, mouseOverCell, mouseDownOnCell, rightClickCell} from '../actions/newNonActions'


class NewGridContainer extends Component {

  handleMouseEvents=event=>{
    if (event.type==='mousedown'){this.props.mouseDownOnCell(event.target.id)}
    else if (event.type==='mouseover'){this.props.mouseOverCell(event.target.id)}
    else if (event.type==='mouseup'){this.props.mouseUp()}
    else if (event.type==='contextmenu') {
      event.preventDefault()
      this.props.rightClickCell()
    }
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
        <NewGrid grid={this.props.grid} handleMouseEvents={this.handleMouseEvents}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.newNon.grid })




export default connect(mapStateToProps, {postNonogram, mouseUp, mouseOverCell, mouseDownOnCell, rightClickCell})(NewGridContainer)
