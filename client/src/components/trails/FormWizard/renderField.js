import React from "react";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="renderField">
    <label>{label}</label>
    <div>
      <input {...input} type={type} />
      {touched && error && <p className="validation-error">{error}</p>}
    </div>
  </div>
);

export default renderField;
