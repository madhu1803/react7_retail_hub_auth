import React, { Component } from "react";
import "./Css/LeftContainer.css";
export default class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <img
          src="https://i.imgur.com/o3FvBnt.png"
          className="img-responsive left-img"
        />
        <h4 className="text-white left-txt">
          India's First Customized Instore Solutions Company
        </h4>
      </div>
    );
  }
}
