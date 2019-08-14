import React, { Component } from 'react';
import GridSizer from '../components/newNons/GridSizer'
import NewGrid from '../components/newNons/NewGrid'
import { connect } from 'react-redux'

class NewNonContainer extends Component {

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


    return (
      <div>
        <GridSizer handleOnChange={this.handleSizeChange} vert={this.state.vert} hor={this.state.hor}/>
        <NewGrid grid={this.props.grid} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.grid })

const mapDispatchToProps = dispatch => ({
  resizeGrid: (vert, hor) => dispatch({type: 'ADD_RESTAURANT', vert, hor}),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewNonContainer)
