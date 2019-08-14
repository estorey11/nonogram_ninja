import React, { Component } from 'react';


class NewGrid extends Component {


  mapGrid=()=>{

    const grid = this.props.grid.map((row, y)=>{
      return (<tr key={y}>{this.mapRow(row, y)}</tr>)
    })

    return grid;
  }

  mapRow= (row, y)=>{
    return(
      row.map((cell, x)=>{
        return (<td key={x.toString()+','+y.toString()}>{cell}</td>)
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

export default NewGrid
