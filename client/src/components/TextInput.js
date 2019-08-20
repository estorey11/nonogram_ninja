import React from 'react';
import Form from 'react-bootstrap/Form'

const TextInput = props =>
    <Form>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type="text" value={props.value} onChange={props.handleOnChange} style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}/>
      </Form.Group>
    </Form>

export default TextInput;
