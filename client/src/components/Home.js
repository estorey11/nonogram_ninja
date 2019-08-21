import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Home = () =>
  <Alert variant='primary' style={{margin: '30px', width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
    <h2>Welcome to Nonogram Ninja!</h2>
    <p>Nonogram Ninja is a platform to create your own nonograms as well as solve nonograms that have already been created. What is a nonogram? Per Wikipedia:</p>
    <p style={{fontStyle: 'italic'}}>Nonograms, also known as Picross or Griddlers, are picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the side of the grid to reveal a hidden picture. In this puzzle type, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive groups.</p>
  </Alert>

export default Home;
