import React, { Component } from 'react';
import NewGrid from '../components/newNons/NewGrid'
import { connect } from 'react-redux'

class NewGridContainer extends Component {

  handleCellClick=event=>{
    const coords= event.target.tagName
  }




  render() {

    return (
      <div>
        <NewGrid grid={this.props.grid} handleOnClick={this.handleCellClick}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ grid: state.grid })



export default connect(mapStateToProps)(NewGridContainer)
