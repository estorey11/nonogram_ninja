import React, { Component } from 'react';
import '../../custom.css'

const GridSizer = props =>

      <div>
        <form onSubmit={props.handleOnSubmit}>
        Height: <input type="number" name="yLength" min="1" max="30" value={props.yLength} onChange={props.handleOnChange}/>

        Width: <input type="number" name="xLength" min="1" max="30" value={props.xLength} onChange={props.handleOnChange}/>
        </form>
      </div>



export default GridSizer
