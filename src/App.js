import React, { Component } from "react";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";
export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 d-lg-block d-none">
          <LeftContainer />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <RightContainer />
        </div>
      </div>
    );
  }
}
