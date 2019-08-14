import React, { Component } from 'react';
import GridSizer from '../components/nonCreators/GridSizer'
import GridCreator from '../components/nonCreators/GridCreator'
import { connect } from 'react-redux'

class NonCreatorContainer extends Component {

  state={vert: 5, hor: 5}

  handleSizeChange=event=>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleCellClick=event=>{

  }


  gridFromSize=()=>{

    let grid=[]
    let row=[]

    for (var i = 0; i < this.state.vert; i++){
      row =[];
      for (var j = 0; j < this.state.hor; j++){
        row[j]=0
      }

      grid[i]=row
    }

    return grid;

  }



  render() {
    const grid = this.gridFromSize()

    return (
      <div>
        <GridSizer handleOnChange={this.handleSizeChange} vert={this.state.vert} hor={this.state.hor}/>
        <GridCreator grid={grid} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

export default NonCreatorContainer
