import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class Input extends Component {
  render() {
    let { type, placeholder, change, name, value } = this.props;
    return (
      <Form.Group className="pb-4">
        <Form.Control
          type={type}
          placeholder={placeholder}
          onChange={change}
          name={name}
          value={value}
        />
      </Form.Group>
    );
  }
}
