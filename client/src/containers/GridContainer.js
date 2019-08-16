import React, { Component } from 'react';
import Grid from '../components/Grid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'

class GridContainer extends Component {

  handleCellClick=event=>{
  //  this.props.switchCell(event.target.id)
  }

  handleSubmitClick=event=>{

  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick}/>
        <Grid grid={this.props.grid} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.Non.grid })

const mapDispatchToProps = dispatch => ({
  switchCell: (coords) => dispatch({type: 'SWITCH_CELL', coords}),
})


export default connect(mapStateToProps, mapDispatchToProps)(GridContainer)
