import React, { Component } from "react";
import { Form } from "react-bootstrap";
export default class Input extends Component {
  render() {
    let { type, placeholder } = this.props;
    return (
      <Form.Group className="pb-3">
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    );
  }
}
