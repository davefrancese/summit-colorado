import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Summit Colorado</h1>
        <p>
          Welcome! Login to get started. Once you're in, you can browse all the
          trails. Add ones you want to hike onto your wishlist, or if you see
          one you have completed already, add it to your completed list. If you
          don't see a trail you want, simply add it with all the details. We
          want to keep all the trails a database of hikes where the end goal is
          to summit a particular peak in Colorado. In addition, if you hike
          regularly we have a place where you can setup your checklist for all
          your gear you take so that you won't forget a thing while you are
          enjoying colorful Colorado!
        </p>
        <footer>
          <p>
            Summit Colorado built and curated by:{" "}
            <a href="https://www.linkedin.com/in/davefrancese/">
              Dave Francese
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
