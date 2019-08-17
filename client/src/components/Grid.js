import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import '../custom.css'


class Grid extends Component {


  mapGrid=()=>{

    const grid = this.props.grid.map((row, y)=>{
      return (<tr key={y}>{this.mapRow(row, y)}</tr>)
    })

    return grid;
  }

  mapRow= (row, y)=>{
    return(
      row.map((cell, x)=>{
        return (<td style={cell===1 ? {backgroundColor: 'black'} : {backgroundColor: 'white'}} key={x.toString()+','+y.toString()} id={x.toString()+','+y.toString()} onClick={this.props.handleOnClick}>{}</td>)
      })
    )
  }

  render() {

    return (
      <div>
        <table>
          <tbody>
            {this.mapGrid()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid
