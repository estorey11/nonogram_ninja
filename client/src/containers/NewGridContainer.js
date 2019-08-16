import React, { Component } from 'react';
import NewGrid from '../components/newNons/NewGrid'
import { connect } from 'react-redux'
import SubmitButton from '../components/SubmitButton'

class NewGridContainer extends Component {

  handleCellClick=event=>{
    this.props.switchCell(event.target.id)
  }

  handleSubmitClick=event=>{

  }


  render() {

    return (
      <div>
        <SubmitButton handleOnClick={this.handleSubmitClick}/>
        <NewGrid grid={this.props.grid} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.grid })

const mapDispatchToProps = dispatch => ({
  switchCell: (coords) => dispatch({type: 'SWITCH_CELL', coords}),
})


export default connect(mapStateToProps, mapDispatchToProps)(NewGridContainer)
