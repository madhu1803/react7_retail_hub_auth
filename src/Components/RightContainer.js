import React, { Component } from "react";
import "./Css/RightContainer.css";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import Input from "./Input";
import { Button } from "react-bootstrap";
export default class RightContainer extends Component {
  render() {
    return (
      <div className="container right-container text-capitalize">
        <div className="header">
          <h4 className="right-heading">
            <AiFillCodeSandboxCircle className="right-icon mr-2" />
            Retail Hub
          </h4>
          <p className="text-muted pt-3 mt-5">please login to your account</p>
        </div>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <p className="forgot-psd">Forgot Password?</p>
        <Button variant="success" className="login-btn mt-5">
          Login
        </Button>
        <p className="text-muted txt-container">
          Copyright Retail Scan Management Services Pvt Ltd 2020
          <br />
          <a href="#">Terms & Conditions</a>
        </p>
      </div>
    );
  }
}
