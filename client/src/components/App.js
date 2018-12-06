import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Trails from "./trails/Trails";
import TrailNew from "./trails/TrailNew";
import TrailSingle from "./trails/TrailSingle";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchTrails();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App-container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/trails" component={Trails} />
            <Route path="/trails/new" component={TrailNew} />
            <Route
              path="/trail/:id"
              render={props => <TrailSingle {...props} />}
            />
          </div>
        </BrowserRouter>
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
)(App);
