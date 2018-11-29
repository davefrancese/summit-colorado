import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    // const { displayName } = this.props.authReducer;
    return (
      <div className="Menu">
        <p>
          <a href="/api/logout">Logout</a>
        </p>
      </div>
    );
  }
}

function mapStateToProps({ authReducer }) {
  return { authReducer };
}

export default connect(mapStateToProps)(Menu);
