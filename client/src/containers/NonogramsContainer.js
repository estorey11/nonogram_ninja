import React, { Component } from 'react';
import NonListContainer from './NonListContainer'




class NonogramsContainer extends Component {

  

  render() {

    if (this.props.nonograms.length>1){return(
      <NonListContainer nonograms={this.props.nonograms}/>
    )}
    else{return(<div></div>)}
  }
}



export default NonogramsContainer
