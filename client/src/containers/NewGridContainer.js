import React, { Component } from 'react';
import NewGrid from '../components/newNons/NewGrid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import {postNonogram, mouseUp, mouseOverCell, mouseDownOnCell, rightClickCell} from '../actions/newNonActions'
import TextInput from '../components/TextInput'
import {withRouter} from 'react-router-dom';


class NewGridContainer extends Component {

  state={nameValue: ""}

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
    this.props.history.push('/success');
  }

  gridConverter=()=>{
    const height=this.props.grid.length
    const width=this.props.grid[0].length
    const solution=this.solutionConverter();

    return {nonogram: {height: height, width: width, solution: solution, name: this.state.nameValue} }
  }

  solutionConverter=()=>{
    const solutionRows=this.props.grid.map(row=>row.join(''))
    return solutionRows.join('')
  }

  handleNameChange=event=>{
    this.setState({nameValue: event.target.value})
  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick} label="Submit Nonogram"/>
        <TextInput label="Nonogram Name:" value={this.state.nameValue} handleOnChange={this.handleNameChange}/>
        <NewGrid grid={this.props.grid} handleMouseEvents={this.handleMouseEvents} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.newNon.grid })




export default withRouter(connect(mapStateToProps, {postNonogram, mouseUp, mouseOverCell, mouseDownOnCell, rightClickCell})(NewGridContainer))
