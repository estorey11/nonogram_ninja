import React, { Component } from 'react';
import '../../custom.css'
import InputGroup from 'react-bootstrap/InputGroup'

const GridSizer = props =>

      <div>
        <form>

        Height: <input type="number" name="yLength" min="1" max="30" value={props.yLength} onChange={props.handleOnChange}/>

        {'\xa0\xa0'} Width: <input type="number" name="xLength" min="1" max="30" value={props.xLength} onChange={props.handleOnChange}/>
        </form>
      </div>



export default GridSizer
