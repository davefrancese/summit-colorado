import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Navigation from "../Navigation";
import TrailsList from "./TrailsList";

class Trails extends Component {
  render() {
    // const { trailsReducer } = this.props;

    return (
      <div className="Trails">
        <Navigation />
        <div>
          <p>
            <Link to="/trails/new">+</Link>
          </p>
          <TrailsList />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ trailsReducer }) {
  return { trailsReducer };
}

export default connect(
  mapStateToProps,
  actions
)(Trails);
