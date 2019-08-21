import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'

const NonList = (props) => {

  const renderNons = props.nonograms.map(nonogram =>
    <ListGroup.Item variant="primary">
      <Link key={nonogram.id} to={`/nonograms/${nonogram.id}`}>
        {nonogram.width}x{nonogram.height} {nonogram.name}
      </Link>
    </ListGroup.Item>
  );
  return (
    <ListGroup style={{width: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>
      {renderNons}
    </ListGroup>
  );
};

export default NonList
