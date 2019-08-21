import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const SubmitSolutionAlert = props =>
  <Alert variant={props.variant} show={props.show}>
    {props.text}
    <div>
      <Button
        show={props.buttonShow}
        style={{margin: '10px'}}
        onClick={props.onClick}
        variant="outline-danger">
              Try Again
      </Button>
      <Button
        show={props.buttonShow}
        style={{margin: '10px'}}
        onClick={props.onClick}
        variant="outline-danger">
              See Solution
      </Button>
    </div>
  </Alert>

export default SubmitSolutionAlert;
