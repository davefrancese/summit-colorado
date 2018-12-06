import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import renderField from "./renderField";
import validate from "./validate";

const WizardFormThirdPage = props => {
  const { onTrailSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={onTrailSubmit}>
      <Field
        name="trailHead_lat"
        component={renderField}
        type="text"
        label="Trail Head Latitude"
      />
      <Field
        name="trailHead_lng"
        component={renderField}
        type="text"
        label="Trail Head Longitude"
      />
      <Field
        name="parkingRestrictions"
        component={renderField}
        type="text"
        label="Are there Parking Restrictions?"
      />
      <Field
        name="petRestrictions"
        component={renderField}
        type="text"
        label="Are there Pet Restrictions?"
      />
      <Field
        name="campingRestrictions"
        component={renderField}
        type="text"
        label="Are there Camping Restrictions?"
      />
      <Field
        name="licenseRequired"
        component={renderField}
        type="text"
        label="Any licenses required? If so, list types and prices."
      />
      <div>
        <Link to="/trails">
          <button>Cancel</button>
        </Link>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Review
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
})(WizardFormThirdPage);
