import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import '../../custom.css'


class Grid extends Component {


  mapGrid=()=>{

    const grid = this.props.grid.map((row, y)=>{
      return (<tr key={y}>{this.mapRow(row, y)}</tr>)
    })

    grid.unshift(this.mapColClues())

    return grid;
  }

  mapColClues(){

    let colClues=this.props.colClues.map(clueGroup=>
      <th class="colClue">{clueGroup.join('\n')}</th>
    )

    colClues.unshift(<td></td>)

    return colClues
  }

  mapRow(row, y){
    let mappedRow = row.map((cell, x)=>{
        return (<td style={cell===1 ? {backgroundColor: 'black'} : {backgroundColor: 'white'}} key={x.toString()+','+y.toString()} id={x.toString()+','+y.toString()} onClick={this.props.handleOnClick}>{cell==='X' ? cell : ''}</td>)
    })

    mappedRow.unshift(this.getRowClue(y))
    return mappedRow
  }

  getRowClue(rowNum){
    return (<th class="rowClue">{this.props.rowClues[rowNum].join('\xa0\xa0\xa0')}</th>)
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
