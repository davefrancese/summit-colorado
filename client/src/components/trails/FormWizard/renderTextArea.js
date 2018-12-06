import React from "react";

const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div className="renderField">
    <div>
      <textarea {...input} type={type} />
      {touched && error && <p className="validation-error">{error}</p>}
    </div>
  </div>
);

export default renderTextArea;
