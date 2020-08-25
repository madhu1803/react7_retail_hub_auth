import React, { Component } from "react";
import "./Css/RightContainer.css";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import Input from "./Input";
import { Button } from "react-bootstrap";
export default class RightContainer extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    alert("Submitted");
    console.log(this.state.email);
    console.log(this.state.password);
    this.setState({ email: "", password: "" });
  };
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
        <Input
          type="email"
          placeholder="Email Address"
          value={this.state.email}
          name="email"
          change={(e) => this.handleChange(e)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={this.state.password}
          name="password"
          change={(e) => this.handleChange(e)}
        />
        <p className="forgot-psd">Forgot Password?</p>
        <Button
          variant="success"
          className="login-btn mt-5"
          onClick={this.submitHandler}
        >
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
