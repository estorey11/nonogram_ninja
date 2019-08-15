import React, { Component } from 'react';


class GridSizer extends Component {


  render() {
    return (
      <div>
        <form onSubmit={this.props.handleOnSubmit}>
          Vertical: <input type="number" name="yLength" min="1" max="25" value={this.props.yLength} onChange={this.props.handleOnChange}/>

          Horizontal: <input type="number" name="xLength" min="1" max="25" value={this.props.xLength} onChange={this.props.handleOnChange}/>
        </form>
      </div>
    );
  }
}

export default GridSizer
