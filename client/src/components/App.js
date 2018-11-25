import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    // console.log("App this", this);
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App-container">
            <Header />
            <Route exact path="/" component={Landing} />

            {/* FOOTER */}
            <footer>
              <p>
                Summit Colorado built and curated by:{" "}
                <a href="https://www.linkedin.com/in/davefrancese/">
                  Dave Francese
                </a>
              </p>
            </footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
