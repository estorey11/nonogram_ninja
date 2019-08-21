
import React from 'react';
import Button from 'react-bootstrap/Button'

const SubmitButton = props => <Button
                                style={{margin: '10px'}}
                                onClick={props.handleOnClick}
                                disabled={props.disabled}>
                                  {props.label}
                              </Button>

export default SubmitButton;
