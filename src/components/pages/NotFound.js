import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-12">
          <h1 className="display-3">404 Page Not Found</h1>
        </div>
        <div className="col-12">
          <p className="lead">Sorry, that page does not exists.</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
