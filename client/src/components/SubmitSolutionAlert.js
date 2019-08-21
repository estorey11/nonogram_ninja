import React from 'react';
import Alert from 'react-bootstrap/Alert'

const SubmitSolutionAlert = props =>
  <Alert variant={props.variant} show={props.show}>
    {props.text} Placeholder text!
  </Alert>

export default SubmitSolutionAlert;
