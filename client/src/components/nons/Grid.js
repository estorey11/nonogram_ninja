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
        return (<td
          style={this.getCellStyle(cell)}
          key={x.toString()+','+y.toString()}
          id={x.toString()+','+y.toString()}
          onMouseDown={this.props.handleMouseEvents}
          onMouseUp={this.props.handleMouseEvents}
          onMouseOver={this.props.handleMouseEvents}
          onContextMenu={this.props.handleMouseEvents}>
            { cell==='X' ? cell : '' }
          </td> )
    })

    mappedRow.unshift(this.getRowClue(y))
    return mappedRow
  }

  getCellStyle(cell){
    switch (cell) {
      case 0: return {backgroundColor: 'white'}
      case 1: return {backgroundColor: 'black'}
      case 2: return {backgroundColor: 'white',
                      outline: '1px solid red',
                      outlineOffset: '-4px'}
      case 3: return {backgroundColor: 'red'}
      case 'X': return {backgroundColor: 'white'}
      default: return {backgroundColor: 'white'}
    }
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
