import React, { Component } from 'react';


class GridSizer extends Component {


  render() {
    return (
      <div>
        <form onSubmit={this.props.handleOnSubmit}>
          Vertical: <input type="number" name="vert" min="1" max="25" value={this.props.vert} onChange={this.props.handleOnChange}/>

          Horizontal: <input type="number" name="hor" min="1" max="25" value={this.props.hor} onChange={this.props.handleOnChange}/>
        </form>
      </div>
    );
  }
}

export default GridSizer
