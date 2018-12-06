import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import renderField from "./renderField";
import renderTextArea from "./renderTextArea";
import validate from "./validate";

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="peakName"
        type="text"
        component={renderField}
        label="Peak Name"
      />
      <label>Brief Description</label>
      <Field
        name="description"
        type="textarea"
        component={renderTextArea}
        label="Brief description"
      />

      <div>
        <Link to="/trails">
          <button>Cancel</button>
        </Link>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  validate,
  form: "trailForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(WizardFormFirstPage);
