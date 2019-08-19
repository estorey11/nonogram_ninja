import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NonList = (props) => {

  const renderNons = props.nonograms.map(nonogram =>
    <li><Link key={nonogram.id} to={`/nonograms/${nonogram.id}`}>{nonogram.width}x{nonogram.height} {nonogram.name}</Link></li>
  );
  return (
    <ul style={{listStyle: 'none'}}>
      {renderNons}
    </ul>
  );
};

export default NonList
