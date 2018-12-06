import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navigation from "../Navigation";

class TrailSingle extends Component {
  renderContent() {
    const { trailsReducer } = this.props;
    const { id } = this.props.match.params;
    return _.map(trailsReducer, trail => {
      if (trail._id === id) {
        return (
          <div key={id}>
            <h2>{trail.peakName}</h2>
            <p>{trail.elevation}</p>
            <p>{trail.description}</p>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Link to="/trails">
          <p className="back">Back</p>
        </Link>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ trailsReducer }) {
  return { trailsReducer };
}

export default connect(mapStateToProps)(TrailSingle);
