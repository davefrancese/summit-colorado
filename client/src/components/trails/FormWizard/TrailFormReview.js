import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import _ from "lodash";

import FIELDS from "./FIELDS";
import * as actions from "../../../actions";

const TrailFormReview = ({ onCancel, formValues, submitTrail, history }) => {
  const reviewFields = _.map(FIELDS, ({ name, label }) => {
    return (
      <div
        className={`TrailFormReview-${name} TrailFormReview-field`}
        key={name}
      >
        <label>{label}</label>
        <p>{formValues[name]}</p>
      </div>
    );
  });

  return (
    <div className="TrailFormReview">
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitTrail(formValues, history)}>
        Add Trail
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.trailForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "trailForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(withRouter(TrailFormReview))
);
