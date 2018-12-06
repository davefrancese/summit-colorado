import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import renderField from "./renderField";
import validate from "./validate";

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="elevation"
        type="text"
        component={renderField}
        label="Peak Elevation"
      />
      <Field
        name="elevationGain"
        component={renderField}
        type="text"
        label="Elevation Gain"
      />
      <Field
        name="totalHikeDistance"
        component={renderField}
        type="text"
        label="Total Hike Distance"
      />
      <Field
        name="hikeInDistance"
        component={renderField}
        type="text"
        label="Distance from Trailhead to Summit"
      />
      <Field
        name="isLoop"
        component={renderField}
        type="text"
        label="Is this trail a loop?"
      />
      <Field
        name="difficulty"
        component={renderField}
        type="text"
        label="Class difficulty (Class 1 - Class 5)"
      />
      <div>
        <Link to="/trails">
          <button>Cancel</button>
        </Link>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  validate,
  form: "trailForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(WizardFormSecondPage);
