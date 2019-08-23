import React, { Component } from 'react';
import NonList from '../components/nons/NonList'




class NonListContainer extends Component {

  constructor(props){
    super(props)

    let scores=props.nonograms.map(nonogram=>
      0
    )

    this.state={
      scores: scores
    }
  }



  handleDownvote = event=>{
    let scores=[...this.state.scores]
    scores[event.target.id]=scores[event.target.id]-1
    this.setState({...this.state, scores: scores})
  }

  handleUpvote = event=>{
    let scores=[...this.state.scores]
    scores[event.target.id]=scores[event.target.id]+1

    this.setState({...this.state, scores: scores})
  }

  render() {

    return(
      <NonList handleDownvote={this.handleDownvote} handleUpvote={this.handleUpvote} nonograms={this.props.nonograms} scores={this.state.scores}/>
    )
  }
}



export default NonListContainer
