import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const NonList = (props) => {

  const renderNons = props.nonograms.map((nonogram, i) =>{
    if(nonogram.id!=0){
      return(
      <ListGroup.Item variant="primary">
        <Link key={nonogram.id} to={`/nonograms/${nonogram.id}`}>
          {nonogram.width}x{nonogram.height} {nonogram.name}
        </Link>
         {'\xa0'} Score: {props.scores[i]} {'\xa0'}
        <Button style={{margin: '2px'}} key={i} id={i} onClick={props.handleUpvote}>&#8593;</Button>
        <Button style={{margin: '2px'}} key={i} id={i} onClick={props.handleDownvote}>&#8595;</Button>
      </ListGroup.Item>)
    }
  }
  );
  return (
    <ListGroup style={{width: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>
      {renderNons}
    </ListGroup>
  );
};

export default NonList
