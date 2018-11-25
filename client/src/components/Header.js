import React, { Component } from "react";
import Link from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    const { displayName } = this.props.authReducer;
    switch (this.props.authReducer) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              <button type="button" className="btn">
                Login with Google
              </button>
            </a>
          </li>
        );
      default:
        // logged in
        return [
          <li key="1">Welcome, {displayName}</li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    console.log("Header props", this);
    return (
      <div className="Header">
        <h1>Summit Colorado</h1>
        <ul>{this.renderContent()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ authReducer }) {
  return { authReducer };
}

export default connect(mapStateToProps)(Header);
