import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

// const trim = peakName => {
//   let arr = [];
//   _.map(peakName, letter => {
//     if (letter !== " ") {
//       arr.push(letter);
//     }
//   });
//   return arr.join("");
// };

class TrailsList extends Component {
  renderContent() {
    const { trailsReducer } = this.props;
    return _.map(trailsReducer, trail => {
      return (
        <div key={trail.peakName}>
          <Link to={`/trail/${trail._id}`}>
            <div className="TrailList-trail">
              <p className="TrailList-trailName">{trail.peakName}</p>
              <p className="TrailList-trailElevation">
                Elevation <span>{trail.elevation}</span>
              </p>
            </div>
          </Link>
        </div>
      );
    });
  }
  render() {
    return <div className="TrailList">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ trailsReducer }) {
  return { trailsReducer };
}

export default connect(mapStateToProps)(TrailsList);
