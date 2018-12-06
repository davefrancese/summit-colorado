import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./Menu";

class Header extends Component {
  renderContent() {
    // const { displayName } = this.props.authReducer;
    switch (this.props.authReducer) {
      case null:
        return;
      case false:
        return (
          <div className="Header-login">
            <li>
              <li>
                <a href="/auth/google">Login with Google</a>
              </li>
            </li>
          </div>
        );
      default:
        // logged in
        return <Menu />;
    }
  }

  render() {
    // console.log("Header props", this);
    return (
      <div className="Header">
        <h1>
          <Link to={this.props.authReducer ? "/dashboard" : "/"}>
            Summit Colorado
          </Link>
        </h1>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ authReducer }) {
  return { authReducer };
}

export default connect(mapStateToProps)(Header);
