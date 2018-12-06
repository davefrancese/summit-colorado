import React, { Component } from "react";
import { reduxForm } from "redux-form";

import Navigation from "../Navigation";
// import TrailForm from "./TrailForm";
import WizardForm from "./FormWizard/WizardForm";
import TrailFormReview from "./FormWizard/TrailFormReview";

class TrailNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TrailFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <WizardForm
        onTrailSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div className="TrailNew">
        <Navigation />
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "trailForm"
})(TrailNew);
