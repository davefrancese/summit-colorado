import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";

class Dashboard extends Component {
  render() {
    const { displayName } = this.props.authReducer;
    return (
      <div className="Dashboard">
        <Navigation />
        <h1>Welcome, {displayName}</h1>
      </div>
    );
  }
}

function mapStateToProps({ authReducer }) {
  return { authReducer };
}

export default connect(mapStateToProps)(Dashboard);
