import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const SubmitSolutionAlert = props =>
  <Alert variant={props.variant} show={props.show}>
    {props.text}
    <div style={props.buttonShow ? {} : {display: 'none'}}>
      <Button
        style={{margin: '10px'}}
        onClick={props.tryAgain}
        variant="outline-danger">
              Try Again
      </Button>
      <Button
        style={{margin: '10px'}}
        onClick={props.seeSolution}
        variant="outline-danger">
              See Solution
      </Button>
    </div>
  </Alert>

export default SubmitSolutionAlert;
